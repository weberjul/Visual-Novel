declare namespace Template {
    function Boss(): ƒS.SceneReturn;
}
declare namespace Template {
    function Dead(): ƒS.SceneReturn;
}
declare namespace Template {
    function DerNeue(): ƒS.SceneReturn;
}
declare namespace Template {
    function DerPreis(): ƒS.SceneReturn;
}
declare namespace Template {
    function DieErsteMission(): ƒS.SceneReturn;
}
declare namespace Template {
    function DieKatze(): ƒS.SceneReturn;
}
declare namespace Template {
    function DieLetzteMission(): ƒS.SceneReturn;
}
declare namespace Template {
    function HappyEnd(): ƒS.SceneReturn;
}
declare namespace Template {
    function ImSchlafzimmer(): ƒS.SceneReturn;
}
declare namespace Template {
    function InDerKüche(): ƒS.SceneReturn;
}
declare namespace Template {
    function Items(): ƒS.SceneReturn;
}
declare namespace Template {
    function JemandBrauchtHilfe(): ƒS.SceneReturn;
}
declare namespace Template {
    function Lagebesprechung(): ƒS.SceneReturn;
}
declare namespace Template {
    function LastScene(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        time: {
            duration: number;
            alpha: string;
            edge: number;
        };
        normal: {
            duration: number;
            alpha: string;
            edge: number;
        };
        correct: {
            duration: number;
            alpha: string;
            edge: number;
        };
        dead: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fail: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        NeverSurrender: string;
        AFool: string;
        Mission: string;
        Dead: string;
        Sinister: string;
        CosmicDrift: string;
        Glass: string;
        Love: string;
        WakeUp: string;
        Wind: string;
        Car: string;
        Birds: string;
        Door: string;
        Window: string;
        Laugh: string;
        Woodpecker: string;
        Water: string;
        Psst: string;
        Hilfe: string;
        Miau: string;
        Purr: string;
    };
    let locations: {
        office: {
            name: string;
            background: string;
        };
        shelter: {
            name: string;
            background: string;
        };
        missionone: {
            name: string;
            background: string;
        };
        kitchen: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
        place: {
            name: string;
            background: string;
        };
        nothing: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
        future: {
            name: string;
            background: string;
        };
        grave: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        ylva: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                idiot: string;
                handup: string;
                hips: string;
                pointing: string;
                psst: string;
                cry: string;
                laugh: string;
                sit: string;
                sittwo: string;
                sittwotalk: string;
                nails: string;
                last: string;
                happy: string;
                stand: string;
                hand: string;
            };
        };
        riaz: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                greeting: string;
                sad: string;
                normal: string;
                cry: string;
                laugh: string;
                sittwo: string;
                sittwoitem: string;
                last: string;
                happy: string;
                hand: string;
                stand: string;
            };
        };
        maddox: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                go: string;
                laugh: string;
                thinking: string;
                grave: string;
                ylvabegin: string;
            };
        };
        cat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                last: string;
            };
        };
        little: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                alone: string;
                trauer: string;
                wut: string;
                schmerz: string;
                hoffnungslosigkeit: string;
                betteln: string;
                help: string;
                maddoxbegin: string;
                run1: string;
                run2: string;
                run3: string;
            };
        };
        Items: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                Schatulle: string;
                Haarklammer: string;
                Armband: string;
            };
        };
    };
    let dataForSave: {
        Katze: {
            name: string;
        };
    };
    let items: {
        schatulle: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        armband: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        haarklammer: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
    function growAnimation(): ƒS.AnimationDefinition;
    function moveArmband(): ƒS.AnimationDefinition;
    function moveSchatulle(): ƒS.AnimationDefinition;
    function moveHaarklammer(): ƒS.AnimationDefinition;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
        turnUpVolume: string;
        turndownVolume: string;
        credits: string;
        inventar: string;
    };
    function buttonFunctionalities(_option: string): Promise<void>;
    let dataSave: {};
}
declare namespace Template {
    function Monolog(): ƒS.SceneReturn;
}
declare namespace Template {
    function Prolog(): ƒS.SceneReturn;
}
declare namespace Template {
    function Riaz(): ƒS.SceneReturn;
}
declare namespace Template {
    function UnsereZukunft(): ƒS.SceneReturn;
}
declare namespace Template {
    function Ylva(): ƒS.SceneReturn;
}
declare namespace Template {
    function ZeitVergeht(): ƒS.SceneReturn;
}
