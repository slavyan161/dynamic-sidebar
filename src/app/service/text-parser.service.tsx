export class TextParser {
    beatufiulLabel(labelName: string){
        return labelName.replaceAll('-', ' ').replaceAll('_', ' ');
    }
} 