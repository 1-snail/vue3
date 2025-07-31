
import { reactive,onMounted } from 'vue';
import axios from 'axios';

// 这么写，所有的东西（属性、方法、计算属性、钩子都在）都写在这个 ts 文件中
export default function(){

    let dogList = reactive([
        "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_2054.jpg"
    ])
    
    async function addDog(){
        try {
            
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }
        catch(error){
            alert(error)
        }
        
    }

    onMounted(()=>{
        addDog()   //挂载阶段就增加一个
        console.log('3n3');
        
    })

    // 返回内容
    return {dogList,addDog}
  
}