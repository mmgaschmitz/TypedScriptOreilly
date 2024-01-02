type PoemWithPages ={
    name: string;
    pages: number;
};

type PoemWithRhymes ={
    name: string;
    rhymes: boolean;
};

type Poem = PoemWithPages | PoemWithRhymes;

const aPoem : Poem = Math.random() > 0.5 ? {name: "The double image", pages : 7}  : {name: "The double image", rhymes: true};

console.log(aPoem.name);
if("pages" in aPoem)
{
    console.log(aPoem.pages);
}
else
{
    console.log(aPoem.rhymes
}


