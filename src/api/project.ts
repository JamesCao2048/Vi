import { axiosInstance } from '@/plugins/installAxios';

// export function getSystemAssets(params: any) {
//   return axiosInstance.get(`/api/assets/system_asset?asset_type=${params.asset_type}&operation_type=${params.operation_type}`);
// }
export async function getProjectInfo(params: any) {
    const response = await axiosInstance.get(`/api/projects/01H23DZTQN7088HGD2WM2X0QPR`);
    return response; // 返回响应的数据
}

export async function getEditTrack(params: any) {
    const response = await axiosInstance.get(`/api/projects/${params.pid}/oneclick/options/varains`);
    return response; // 返回响应的数据
}
export async function putEditTrack(params:any) {
    const response = await axiosInstance.put(`/api/projects/${params.pid}/edit/track/${params.aid}?edit_track=${params.data}`);
    return response;
}