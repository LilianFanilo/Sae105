document.querySelector('.volet-invisible').addEventListener('click', function (click) {

    document.querySelector(".volet").animate([{
        top: "-20em"
    }], {
        duration: 200
    })
    document.querySelector(".volet").animate([{
        height: "40em"
    }], {
        duration: 200
    })

    setTimeout(function () {
        document.querySelector(".volet-invisible").classList.add("volet-visible");
        document.querySelector(".volet-invisible").classList.remove("volet-invisible");
    }, 200);

})

document.querySelector('.volet').addEventListener('click', function (click) {

    document.querySelector(".volet-visible").animate([{
        top: "9em"
    }], {
        duration: 200
    })
    document.querySelector(".volet").animate([{
        height: "4em"
    }], {
        duration: 200
    })

    setTimeout(function () {
        document.querySelector(".volet").classList.remove("volet-visible");
        document.querySelector(".volet").classList.add("volet-invisible");
    }, 200);

})


var data = [

    {
        "analogie": "un élément",
        "valeur": "l'eau",
        "raison": "L'eau est l'un des élément les plus importants de notre vie, après tout nous sommes bien composé de 90% d'eau et les océans composent 70% de la Terre. J'aime cet élément pour son symbolisme, l'eau peut-être calme et clair comme les lacs ou les rivière mais elle peut être grande et forte comme les vagues. J'aime l'eau pour la sensation de légèreté de la liberté et de sureté qu'elle peut m'offrir. C'est pour cette raison que j'adore les parcs nautiques car je n'ai pas peur des sensations fortes quand je suis dans l'eau contrairement à des parcs d'attractions classiques. C'est aussi pour cette raison que j'aime aller à la mer pendant les vacances et que j'aimerai faire du skynautique ou du jetski",
        "image": "id = 'vague'",
        "suivant": "'#jack'"
    },

    {
        "analogie": "une fête",
        "valeur": "Halloween",
        "raison": "Halloween est une fête très particulière pour moi car en plus d'être simplement une fête de l'effroi, c'est aussi le jour de ma naissance. Donc quand les gens fêtent Halloween c'est un peu comme s'ils me souhaitaient un bon anniversaire. Mais plus qu'être le jour de ma naissance, j'aime aussi cette fête pour l'amusement qu'elle procure. Je ne suis pas un grand fan de films d'horreurs ou d'histoires effrayantes mais j'adore la partie déguisement de la fête. De plus, c'est une fête qui n'a pas des origines religieuses et qui peut donc être appréciée de tous. Je n'oublierai jamais le dernier jour de cours en MMI avant les vacances de la Toussaint pendant lequel nous nous sommes tous déguisés car cela faisait longtemps que je ne m'étais pas déguisé avec des amis",
        "image": "id = 'jack'",
        "suivant": "'#hérisson'"
    },

    {
        "analogie": "un animal",
        "valeur": "un hérisson",
        "raison": "Si je choisi cet animal ce n'est pas parce que je voudrais forcément en être un car je choisirai plus un animal volant ou aquatique pour découvrir un nouveau moyen d'explorer ce monde mais plutôt car on me compare souvent à cet animal depuis petit et je pense qu'il me représente le plus. Le hérisson est un animal petit qui ne bouge pas beaucoup, ce qui est aussi un peu mon cas. La caractéristique principale de cet animal ce sont ses épines qui se mettent en piques quand il se met en boule. Cet aspect de cet animal est souvent comparer avec mes cheveux car même quand ils poussent ils restent toujours droit et quand ils sont courts ils piquent beaucoup. Pour appuyer ce lien avec cet animal, Noël dernier, en plus de mes cadeaux, j'ai reçu un hérisson en bois et une fois le jour de la fête des mères j'ai offert un hérisson fait avec un livre",
        "image": "id = 'hérisson'",
        "suivant": "'#Sonic'"
    },

    {
        "analogie": "un personnage de jeu vidéo",
        "valeur": "Sonic",
        "raison": " Cet hérisson bleu à la vitesse supersonique est l'un de mes personnages de jeux vidéos préféré. J'ai grandi avec cette icône qui malgré les difficultés avec la franchise est restée dans le coeur des fans qui ont certains su cultiver cette passion et créer des comics ou des fan-games. La communauté de cet hérisson est quelque chose qui me fascine car à l'opposer de son rival de toujours Mario, Nintendo cultive la notoriété de Mario alors qu'à l'inverse ce sont les fans qui cultivent la notoriété de Sonic. J'ai joué à Sonic durant toute mon enfance jusqu'à maintenant en passant par les jeux en 2D, en 3D et les jeux Flash. Je me souviendrai toujours de la fois où, durant mes vacances à Argelès, j'ai réussi dans une fête forraine à gagner une peluche Sonic avec la machine à pince en un seul coup. Aussi je me souviendrai du jour de mes 18 ans où on m'a offert un tableau Sonic que j'ai exposé dans ma résidence",
        "image": "id = 'Sonic'",
        "suivant": "'#TS'"
    },

    {
        "analogie": "un film",
        "valeur": "Toy Story",
        "raison": "Les films Pixar ont toujours été des films marquants pour ma part et Toy Story est celui qui m'a le plus touché. Les jouets sont des objets importants de notre enfance car on développe l'imagination et l'affection. On donne vie à nos jouets en leur donnant une personnalité et une histoire. J'apprécie les sujets qu'abordent cette franchise dans chaque film. Même si le premier est plus humoristique, le second parle du statut du jouet en tant qu'objet avec une valeur monétaire ou une valeur sentimentale, le troisième parle de l'adolescence et le quatrième film parle de la séparation. Mon préféré des quatres films seraient le deuxième car Buzz, mon personnage préféré de Toy Story pour sa personnalité et son lore, possède un rôle vraiment majeur là où il est plus devenu un personnage secondaire dans les suites. C'est pour cette raison que je suis impatient de voir ce que le film Lightning peut donner",
        "image": "id = 'TS'",
        "suivant": "'#Japon'"
    },

    {
        "analogie": "un pays",
        "valeur": "le Japon",
        "raison": "Cela peut paraître cliché mais la culture asiatique est une culture qui m'intéresse beaucoup. Voyager dans un autre pays est toujours passionant car j'adore découvrir le mode de vie, la gastronomie et les monuments historiques de ces pays. J'ai fait presque le tour de la France en passant de Lyon, Roanne, Saint-Étienne, Saint-Malo ou encore des villes proches de la Méditerranée et je suis aussi dans d'autres pays comme l'Espagne ou la Suisse et j'ai même déjà dépassé les frontières de l'Europe en allant à Madagascar, un pays dont j'ai des origines. Voyager dans un pays Asiatique ou Oriental serait donc vraiment très intéressant car ce serait découvrir une autre facette de ce monde. Si je choisis le Japon c'est surtout pour sa pop culture comme les jeux vidéos ou les mangas, après tout la France en est le second consommateur",
        "image": "id = 'Japon'",
        "suivant": "'#Jazz'"
    },

    {
        "analogie": "un style de musique",
        "valeur": "le Jazz",
        "raison": "Je n'ai pas forcément de style de musique que j'adore ou que je déteste, j'aime écouté de tout. Cependant si je devais quand même choisir un style de musique je choisirais le jazz. Ce que j'aime avec le jazz c'est que je trouve que c'est le style le plus polyvalent. La musique de jazz peut très bien être joyeuse, tout comme elle peut-être triste, dynamique ou calme. Il y a même l'élèctro jazz ou le blues qui y sont dérivés. D'autres styles de musiques sont aussi polyvalents mais je trouve que les instruments utilisés dans le jazz sont plus agréables à entendre en musique de fond. Je me vois personnellement plus écouter du jazz en ambiance que du rock ou du rap car je trouve que ces styles de musiques me déconcentrent quand j'essaye de travailler",
        "image": "id = 'Jazz'",
        "suivant": "'#formulaire'"
    }

]

var numCase = 0

data.forEach(function afficheNote(résultat) {
    if (numCase % 2 == 0) {
        document.querySelector(".liste-analogies").innerHTML += "<section class= 'fond'" + résultat.image + "><ul id=item><li><a href=#vague>Élément</a></li> <li><a href=#jack>Fête</a></li> <li><a href=#hérisson>Animal</a></li> <li><a href=#Sonic>Jeu vidéo</a></li> <li><a href=#TS>Film</a></li> <li><a href=#Japon>Pays</a></li> <li><a href=#Jazz>Musique</a></li> <li><a href=#formulaire>Que seriez-vous ?</a></li> </ul><div class= 'textD'><h2 class='titre_sectionD'>Si j’étais " + résultat.analogie + ", je serais " + résultat.valeur + "</h2>" + "<p>" + résultat.raison + ".</p>" + "</div><a href=" + résultat.suivant + " class='button2'><strong>V</strong></a></section>";

    } else {
        document.querySelector(".liste-analogies").innerHTML += "<section class= 'fond'" + résultat.image + "><ul id=item><li><a href=#vague>Élément</a></li> <li><a href=#jack>Fête</a></li> <li><a href=#hérisson>Animal</a></li> <li><a href=#Sonic>Jeu vidéo</a></li> <li><a href=#TS>Film</a></li> <li><a href=#Japon>Pays</a></li> <li><a href=#Jazz>Musique</a></li> <li><a href=#formulaire>Que seriez-vous ?</a></li> </ul><div class='textG'><h2  class='titre_sectionG'>Si j’étais " + résultat.analogie + ", je serais " + résultat.valeur + "</h2>" + "<p>" + résultat.raison + ".</p>" + "</div><a href=" + résultat.suivant + " class='button2'><strong>V</strong></a></section>";
    }
    numCase = numCase + 1
});

let media768 = window.matchMedia("(max-width: 768px)");
if (media768.matches) {
    document.querySelector('.volet-invisible').addEventListener('click', function (click) {

        document.querySelector(".volet-invisible").animate([{
            top: "-20em"
        }], {
            duration: 200
        })

        document.querySelector(".volet-invisible").animate([{
            height: "40em"
        }], {
            duration: 200
        })

        setTimeout(function () {
            document.querySelector(".volet-invisible").classList.add("volet-visible");
            document.querySelector(".volet-invisible").classList.remove("volet-invisible");
        }, 200);

        document.querySelector('.volet').addEventListener('click', function (click) {

            document.querySelector(".volet-visible").animate([{
                top: "12em"
            }], {
                duration: 200
            })
            document.querySelector(".volet").animate([{
                height: "20em"
            }], {
                duration: 200
            })
        
            setTimeout(function () {
                document.querySelector(".volet").classList.remove("volet-visible");
                document.querySelector(".volet").classList.add("volet-invisible");
            }, 200);
        
        })

    })
}