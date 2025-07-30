// export 分别暴露，暴露出Person接口
export interface PersonInter{
    id:string,
    name:string,
    age:number
    x?:number // ? 表示可空
}

//一个自定义类型 
// 自定义类型的语法是使用 type 关键字
export type Persons = Array<PersonInter>