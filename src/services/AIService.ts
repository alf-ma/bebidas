import { streamText } from 'ai'
import { openrouter } from '../lib/ai'


export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt: prompt,
            //temperature:
            //system: 'Eres un bartender que tiene 50 años de experiencia'
        })
        return result.textStream
    }
}