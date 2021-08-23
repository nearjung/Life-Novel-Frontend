export class Account {
    public memberId: string | undefined;
    public email: string | undefined;
    public password: string | undefined;
    public firstName: string | undefined;
    public lastName: string | undefined;
    public photoUrl: string | undefined;
    public pictureId: number | undefined;
    public provider: string | undefined;
    public authToken: string | undefined;
    public cash: number | undefined;
    public active: string | undefined;
    public createBy: string | undefined;
    public createDate: Date | undefined;
    public updateBy: string | undefined;
    public updateDate: Date | undefined;
}

export class AccountRegister extends Account {
    public repassword: string | undefined;
}