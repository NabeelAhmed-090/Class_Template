const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const contructor_creator = (className, dataMembers) => {
    var mainString =
        `${capitalizeFirstLetter(className)}(){
            

    }`
    return mainString
}

const getter_creator = (type, data_member) => {
    var mainString =
        `  ${type} get${capitalizeFirstLetter(data_member)}(){
              return ${data_member}
      }`
    return mainString
}

const setter_creator_pointers = (type, data_member) => {
    var mainString = ''
    var nullChar = ''
    nullChar = type === "char*" ? "NULL" : `${data_member}[length-1]`
    mainString +=
        `void set${capitalizeFirstLetter(data_member)}(${type} ${data_member},length){
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


const setter_creator_normal = (type, data_member) => {
    var mainString = ''
    mainString +=
        `void set${capitalizeFirstLetter(data_member)}(${data_member}){
            this.${data_member} = ${data_member}
      }`
    return mainString
}

export const classCreator = (classname, dataMembers) => {
    var mainString = ''
    mainString +=
        `class ${capitalizeFirstLetter(classname)} {
        ${dataMembers.map((x) => {
            return x + ";"
        }).join("\n        ")
        }
public:
    ${contructor_creator(classname, dataMembers)}
    ${dataMembers.map((x) => {
            var type = x.split(" ")
            { return getter_creator(type[0], type[1]) }
        }).join("\n    ")
        }
  
      ${dataMembers.map((x) => {
            var type = x.split(" ")
            if (type[0].indexOf("*") !== -1) {
                { return setter_creator_pointers(type[0], type[1]) }
            }
            else {
                { return setter_creator_normal(type[0], type[1]) }
            }
        }).join("\n      ")
        }
}`
    return mainString
}





