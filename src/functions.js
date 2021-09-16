export const getter_creator = (type, data_member) => {
    var a = `${type} get${data_member}(){
              return ${data_member}
            }`
    return a
}

export const setter_creator_pointers = (type, data_member) => {
    var mainString = ''
    var nullChar = ''
    nullChar = type === "char*" ? "NULL" : `${data_member}[length-1]`
    mainString +=
        `void set${data_member}(${type} ${data_member},length){
            if(this.${data_member} == nullptr){
                delete this.${data_member}
            }
            this.${data_member} = new ${type}[length];
            for(int i=0;i<length;i++){
                this.${data_member}[i] = ${data_member}[i];
            }
            this.${data_member}[length-1] = ${nullChar}
        }`
    return mainString
}


export const setter_creator_normal = (type, data_member) => {
    var mainString = ''
    mainString +=
        `void set${data_member}(${data_member}){
        this.${data_member} = ${data_member}
        }`
    return mainString
}







