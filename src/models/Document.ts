import { Description, Property } from "@tsed/schema";

export class Document {

    @Property()
    @Description("some random id in integer")
    public id: number;

    @Property()
    @Description("some random flag in boolean")
    public flag: boolean;

    @Property()
    @Description("some random content in string")
    public content: string;

    constructor(content: string) {
        this.id = Date.now();
        this.flag = true;
        this.content = content;
    }
}