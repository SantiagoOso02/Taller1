export class Serie 
{
    id : number;
    name :string;
    platform: string;
    seasons : number;
    description: string;
    link:string;
    imagen : string;
    constructor( id: number,name:string,platform:string,seasons:number,description:string, plataforma:string,imagen:string)
    {
        this.id= id;
        this.name=name;
        this.platform=platform;
        this.seasons=seasons;
        this.description=description;
        this.link = plataforma;
        this.imagen=imagen;
    }


}