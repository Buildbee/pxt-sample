/// <reference path="../libs/core/enums.d.ts"/>


// TODO - having difficulties loading external modules here
// so loaded as a script in the simulator.html instead. :/
//import * as chroma from "chroma-js"



namespace pxsim.colors {


    const chroma = (window as any).chroma
    function _makeBlock(JSCadBlockStr: string, body: RefAction) {
        return new Promise<void>((resolve, reject) => {
            // push a new statement as the parent
            board().addBlock(JSCadBlockStr);

            // execute the child blocks
            pxsim.runtime.runFiberAsync(body).then((result) => {
                // return back to previous parent statement, or main
                board().popBlock();
                resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }


    //% blockId=randomColor block="random color"
    //% inlineInputMode=inline
    //% group="Colors"
    //% advanced=false
    export function randomColor(): number {
        const randomLightness = .3 + Math.random() *.5
        const randomHue = Math.round(Math.random()*360)

        return  chroma.hsl(randomHue, 1, randomLightness).num() as number
       
    }

    //% blockId=rainbowColor block="rainbow color: $rainbowColor || color wheel increment: $colorWheelDegrees °"
    //% inlineInputMode=inline
    //% rainbowColor.defl=0
    //% rainbowColor.min=0
    //% rainbowColor.max=360
    //% colorWheelDegrees.defl=20
    //% group="Colors"
    //% advanced=false
    export function rainbowColor(rainbowColor: number, colorWheelDegrees?: number): number {
        const colorWheelIncr = colorWheelDegrees || 20
 
        const hue = (rainbowColor * colorWheelIncr) %360
        return chroma.hsl(hue, 1, .5).num() as number
    }



       
    //% blockId=chooseColor block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.colours='["#ED0A3F","#ED0A3F","#C32148","#FD0E35","#C62D42","#CC474B","#CC3336","#E12C2C","#D92121","#B94E48","#FF5349","#FE4C40","#FE6F5E","#B33B24","#CC553D","#E6735C","#FF9980","#E58E73","#FF7F49","#FF681F","#FF8833","#FFB97B","#ECB176","#E77200","#FFAE42","#F2BA49","#FBE7B2","#F2C649","#F8D568","#FCD667","#FED85D","#FBE870","#F1E788","#FFEB00","#B5B35C","#ECEBBD","#FAFA37","#FFFF99","#FFFF9F","#D9E650","#ACBF60","#AFE313","#BEE64B","#C5E17A","#5E8C31","#7BA05B","#9DE093","#63B76C","#4D8C57","#3AA655","#6CA67C","#5FA777","#93DFB8","#33CC99","#1AB385","#29AB87","#00CC99","#00755E","#8DD9CC","#01786F","#30BFBF","#00CCCC","#008080","#8FD8D8","#95E0E8","#6CDAE7","#2D383A","#76D7EA","#7ED4E6","#0095B7","#009DC4","#02A4D3","#47ABCC","#4997D0","#339ACC","#93CCEA","#2887C8","#00468C","#0066CC","#1560BD","#0066FF","#A9B2C3","#C3CDE6","#4570E6","#7A89B8","#4F69C6","#8D90A1","#8C90C8","#7070CC","#9999CC","#ACACE6","#766EC8","#6456B7","#3F26BF","#8B72BE","#652DC1","#6B3FA0","#8359A3","#8F47B3","#C9A0DC","#BF8FCC","#803790","#733380","#D6AEDD","#C154C1","#FC74FD","#732E6C","#E667CE","#E29CD2","#8E3179","#D96CBE","#EBB0D7","#C8509B","#BB3385","#D982B5","#A63A79","#A50B5E","#614051","#F653A6","#DA3287","#FF3399","#FBAED2","#FFB7D5","#FFA6C9","#F7468A","#E30B5C","#FDD7E4","#E62E6B","#DB5079","#FC80A5","#F091A9","#FF91A4","#A55353","#CA3435","#FEBAAD","#F7A38E","#E97451","#AF593E","#9E5B40","#87421F","#926F5B","#DEA681","#D27D46","#664228","#D99A6C","#EDC9AF","#FFCBA4","#805533","#FDD5B1","#EED9C4","#665233","#837050","#E6BC5C","#D9D6CF","#92926E","#E6BE8A","#C9C0BB","#DA8A67","#C88A65","#000000","#736A62","#8B8680","#C8C8CD", "#4ebed7"]'
    //% value.defl="#4ebed7"
    export function choose(value: number): number {
        // For some reason I can't hide this block from writing to javascript.
        // It should have been a shadow block.
        // So I've made it part of the api.  :/
        return value;
    }




    //% blockId=color_block block="color $color=chooseColor" 
    //% group="Colors"
    //% topblock=false
    //% handlerStatement=true
    export function colorAsync(color: number, body: RefAction): Promise<void> {

        let statementCode = `union([<CHILDREN>])`
        if (color !== undefined && color !== 0x4ebed7) {
            const red = (color & 0xFF0000) >> 16;
            const green = (color & 0x00FF00) >> 8;
            const blue = (color & 0x0000FF);

            statementCode = `color([${red / 255}, ${green / 255}, ${blue / 255}], ${statementCode})`
        }
        return _makeBlock(statementCode, body);




    }

}