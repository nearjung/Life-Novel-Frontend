export class Picture {
    public pictureId: string | undefined;
    public formCode: string | undefined;
    public name: string | undefined;
    public path: string | undefined;
    public active: string | undefined;
    public createBy: string | undefined;
    public createDate: Date | undefined;
    public updateBy: string | undefined;
    public updateDate: Date | undefined;
}

export class PictureUpload extends Picture {
    public base64: string | undefined;
}