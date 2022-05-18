export class NameRegex{
    private NAME_REGEX: RegExp = /^[CAP][0-9]{4}[GHIKLM]/
    public validate(regex:string):boolean{
        return  this.NAME_REGEX.test(regex);
    }
}