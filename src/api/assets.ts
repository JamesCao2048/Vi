import { axiosInstance } from '@/plugins/installAxios';

// export function getSystemAssets(params: any) {
//   return axiosInstance.get(`/api/assets/system_asset?asset_type=${params.asset_type}&operation_type=${params.operation_type}`);
// }
export async function getSystemAssets(params: any) {
    const response = await axiosInstance.get(`/api/assets/system_asset?asset_type=${params.assetType}&operation_type=${params.operationType}`);
    return response; 
}
export async function getAssetInfo(params: any) {
    const response = await axiosInstance.get(`/api/assets/${params.aid}`);
    return response; 
}

export async function getAssets(params: any) {
    const response = await axiosInstance.get(`/api/assets/?asset_type=${params.assetType}`);
    return response; // 
}
// export function getAssets(params: any) {
//   return axiosInstance.get(`/api/assets?asset_type=${params.asset_type}&operation_type=${params.operation_type}`);
// }