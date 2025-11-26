<template>
    <v-dialog
        v-model="bulkStore.fileUploadDialog"
        width="600"
        persistent
        >
        <v-card>
            <v-card-title class="d-flex justify-space-between align-center">
                <span>File Upload</span>
                <v-btn variant="text" icon @click="bulkStore.toggleDialog()">
                    <v-icon :icon="mdiClose"/>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <div class="my-3">Select your <i>Excel</i> file for upload.</div>
                <v-file-input 
                    @change="handleFileChange" 
                    type="file" 
                    clearable 
                    label="File input" 
                    variant="outlined" 
                    accept=".xlsx"
                    @update:modelValue="handleClear"></v-file-input>
                <div v-if="successFileUpload">
                    <div v-if="users.length > 0">
                        <v-chip color="success">{{ users.length }}</v-chip> users loaded successfully.
                    </div>
                    <div class="my-1"></div>
                    <div v-if="locations.length > 0">
                        <v-chip color="success">{{ locations.length }}</v-chip> locations loaded successfully.
                    </div>
                </div>
                <div v-for="error in errors" class="py-1">
                    <v-alert density="compact" color="error">{{ error }}</v-alert>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div v-if="successFileUpload">
                    <v-btn
                    color="success"
                    text="CONFIRM"
                    ></v-btn>
                </div>
            </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import { mdiClose } from '@mdi/js';
import { ref } from 'vue';
import { useBulkStore } from '../../../stores/bulk';
import { UserHeaders, type User } from '../../../interfaces/User'
import { LocationHeaders } from '../../../interfaces/Location'
import * as XLSX from 'xlsx';

const bulkStore = useBulkStore();
const errors = ref<string[]>([]);
const successFileUpload = ref<boolean>(false);
const users = ref<any[]>([]);
const locations = ref<any[]>([]);

const handleFileChange = (event: Event) => {
    bulkStore.errors = [];
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        readExcel(file);
    } else {
        errors.value.push('Please upload a valid Excel file.');
    }
}

const handleClear = () => {
    errors.value = []
    users.value = []
    locations.value = []
}

const readExcel = (file: File) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!e.target?.result) return;
        const data = new Uint8Array(e.target.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetNames = workbook.SheetNames

        const result: {
            users?: any[];
            locations?: any[];
            errors: string[];
            } = { errors: [] };
        
        if (sheetNames.includes("users")) {
            const sheet = workbook.Sheets["users"];

            const usersResult = extractSheetData(sheet, UserHeaders);

            if (!usersResult.headersValid) {
                result.errors.push(
                `Users sheet: Extra: ${usersResult.extra.join(", ")}`
                );
            } else {
                result.users = usersResult.data;
            }
        }

        if (sheetNames.includes("locations")) {
            const sheet = workbook.Sheets["locations"];

            const locationsResult = extractSheetData(sheet, LocationHeaders);

            if (!locationsResult.headersValid) {
                result.errors.push(
                `Users sheet: Extra: ${locationsResult.extra.join(", ")}`
                );
            } else {
                result.locations = locationsResult.data;
            }
        }
        
        errors.value = result.errors ?? [];
        users.value = result.users ?? [];
        locations.value = result.locations ?? [];
    };

    reader.readAsArrayBuffer(file);
    successFileUpload.value = true
}


const extractSheetData = <T>(
    sheet: XLSX.Sheet,
    expectedHeaders: string[]
    ): {
    headersValid: boolean;
    extra: string[];
    data: T[];
    } => {
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const excelHeaders = rows[0] as string[];

    const {extra, valid } = validateHeaders(excelHeaders, expectedHeaders);

    if (!valid) {
        return { headersValid: false, extra, data: [] };
    }

    const rawData = XLSX.utils.sheet_to_json(sheet, { defval: null });

    const typedData = rawData as T[];

    return { headersValid: true, extra, data: typedData };
};

const validateHeaders = (excelHeaders: string[], expected: string[]) => {
    const extra = excelHeaders.filter(h => !expected.includes(h));

    return { extra, valid: extra.length === 0 };
};
</script>