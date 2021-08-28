export class ForumBoard {
    public forumId: number | undefined;
    public forumCatalogId: number = 0;
    public title: string | undefined;
    public html: string | undefined;
    public rating: number = 0;
    public tag: string | undefined;
    public like: string | undefined;
    public watch: string | undefined;
    public active: string | undefined;
    public createBy: string | undefined;
    public createDate: Date | undefined;
    public updateBy: string | undefined;
    public updateDate: Date | undefined;
}

export class ForumBoardModel extends ForumBoard {

}