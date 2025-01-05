import { createI18n } from 'petite-vue-i18n';

/** @type {import('petite-vue-i18n').DefaultLocaleMessageSchema} */
const messages = {};
messages.en = {
    dialogButtonConfirmText: 'OK',
    dialogButtonDismissText: 'Cancel',
    headerName: 'Name',
    headerSize: 'Size',
    headerLastModified: 'Last Modified',
    headerActions: 'Actions',
    headerSearch: 'Search',
    headerSizeSubdirectoryItems: '{0} item | {0} items',
    actionViewImage: 'View image',
    actionPlayVideo: 'Play video',
    actionPlayAudio: 'Play audio',
    actionViewFile: 'View file',
    actionEditFile: 'Edit file',
    actionMove: 'Move to new path',
    actionDeleteFolder: 'Delete folder',
    actionDeleteFile: 'Delete file',
    actionDownloadArchive: 'Download folder as a .zip file',
    actionDownloadFile: 'Download file',
    titleUploadFile: 'Upload files',
    titleCreateFolder: 'Create folder',
    titleDownloadArchive: 'Download root folder as a .zip file',
    titleLogin: 'Login',
    titleLogout: 'Logout ({0})',
    toastFailedLoadAudio: 'Failed to load audio.',
    toastSaveEdit: '{0} has been saved.',
    toastMoveFolder: 'Folder moved.',
    toastMoveFile: 'File moved.',
    toastUploadDisabled: 'File uploading is disabled.',
    toastCreateFolder: 'New folder created.',
    toastFailedLoadAudioMetadata: 'Failed to read audio metadata: {0}',
    dialogDeleteConfirm: 'Are you sure to delete {0}?',
    dialogMoveLabel: 'Path',
    dialogUploadBody: 'Are you sure to upload this file? | Are you sure to upload these {0} files?',
    dialogCreateFolderLabel: 'Folder name',
    dialogUploadPending: 'Pending',
    dialogUploadSucceed: 'Uploaded',
    dialogUploadError: 'Failed to upload',
};
messages['zh-CN'] = {
    dialogButtonConfirmText: '确定',
    dialogButtonDismissText: '取消',
    headerName: '名称',
    headerSize: '大小',
    headerLastModified: '修改日期',
    headerActions: '操作',
    headerSearch: '搜索',
    headerSizeSubdirectoryItems: '{0} 个项目',
    actionViewImage: '查看图像',
    actionPlayVideo: '播放视频',
    actionPlayAudio: '播放音频',
    actionViewFile: '查看文件',
    actionEditFile: '编辑文件',
    actionMove: '移动到路径',
    actionDeleteFolder: '删除文件夹',
    actionDeleteFile: '删除文件',
    actionDownloadArchive: '下载为 ZIP 压缩包',
    actionDownloadFile: '下载文件',
    titleUploadFile: '上传文件',
    titleCreateFolder: '新建文件夹',
    titleDownloadArchive: '下载当前目录为 ZIP 压缩包',
    titleLogin: '登录',
    titleLogout: '注销（{0}）',
    toastFailedLoadAudio: '无法加载音频',
    toastSaveEdit: '已保存 {0}',
    toastMoveFolder: '已移动文件夹',
    toastMoveFile: '已移动文件',
    toastUploadDisabled: '文件上传已禁用',
    toastCreateFolder: '已新建文件夹',
    toastFailedLoadAudioMetadata: '加载音频元数据失败：{0}',
    dialogDeleteConfirm: '确定要删除 {0} 吗？',
    dialogMoveLabel: '路径',
    dialogUploadBody: '确定要上传这个文件吗？ | 确定要上传以下 {0} 个文件吗？',
    dialogCreateFolderLabel: '文件夹名称',
    dialogUploadPending: '等待上传',
    dialogUploadSucceed: '上传成功',
    dialogUploadError: '上传失败',
};
messages['zh-HK'] = {
    ...messages['zh-CN'],
    dialogButtonConfirmText: '確定',
    headerName: '名稱',
    headerSizeSubdirectoryItems: '{0} 個項目',
    actionViewImage: '查看圖像',
    actionPlayVideo: '播放影片',
    actionPlayAudio: '播放音頻',
    actionEditFile: '編輯文件',
    actionMove: '移動到路徑',
    actionDeleteFolder: '刪除文件夾',
    actionDeleteFile: '刪除文件',
    actionDownloadArchive: '下載為 ZIP 壓縮包',
    actionDownloadFile: '下載文件',
    titleUploadFile: '上傳文件',
    titleCreateFolder: '新建文件夾',
    titleDownloadArchive: '下載當前目錄為 ZIP 壓縮包',
    titleLogin: '登入',
    titleLogout: '登出（{0}）',
    toastFailedLoadAudio: '無法加載音頻',
    toastMoveFolder: '已移動文件夾',
    toastMoveFile: '已移動文件',
    toastUploadDisabled: '文件上傳已禁用',
    toastCreateFolder: '已新建文件夾',
    toastFailedLoadAudioMetadata: '加載音頻元數據失敗：{0}',
    dialogDeleteConfirm: '確定要刪除 {0} 嗎？',
    dialogMoveLabel: '路徑',
    dialogUploadBody: '確定要上傳這個文件嗎？ | 確定要上傳以下 {0} 個文件嗎？',
    dialogCreateFolderLabel: '文件夾名稱',
    dialogUploadPending: '等待上傳',
    dialogUploadSucceed: '等待成功',
    dialogUploadError: '上傳失敗',
};
messages['zh-TW'] = {
    ...messages['zh-HK'],
    toastFailedLoadAudio: '無法載入音訊',
    toastFailedLoadAudioMetadata: '載入音訊元數據失敗：{0}',
};

export default createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: 'en',
    messages,
});
