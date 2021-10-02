const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const parameters = (dataMembers) => {
    var length = dataMembers.length
    var mainString = ''
    mainString +=
        `${dataMembers.map((x, index) => {
            var retString = index + 1 === length ? `${x}` : `${x}`
            return (
                retString
            )
        }).join(', ')}`
    return mainString
}

const destructor_creator = (className, dataMembers) => {
    var filtered = dataMembers.filter(x => {
        if (x.indexOf("*") !== -1) {
            return true
        }
        else return false
    })
    var mainString = ``
    mainString +=
        `~${capitalizeFirstLetter(className)}(){
            ${filtered.map(x => {
            return (
                `delete ${x.split(' ')[1]};`
            )
        }).join('\n            ')}
      }`

    return mainString
}

const getter_creator = (type, data_member) => {
    var mainString =
        `  ${type} get${capitalizeFirstLetter(data_member)}(){
              return ${data_member};
        }`
    return mainString
}

const defaultConstructor = (data_members, className) => {
    var mainString = ''
    mainString +=
        `${capitalizeFirstLetter(className)}(){
        ${data_members.map((x) => {
            var type = x.split(" ")
            if (type[0] === 'int') {
                return `${type[1]} = 0;`
            }
            else if (type[0] === 'char') {
                return `${type[1]} = '\\0';`
            }
            if (type[0] === 'bool') {
                return `${type[1]} = false;`
            }
            if (type[0] === 'string') {
                return `${type[1]} = "";`
            }
            if (type[0] === 'int*' | type[0] === 'char*') {
                return `${type[1]} = nullptr;`
            }
            return ''
        }).join("\n        ")}
      }`

    return mainString
}

const setter_creator_pointers_char = (type, data_member) => {
    var mainString = ''
    var nullChar = ''
    nullChar = type === "char*" ? "NULL" : `${data_member}[length-1]`
    mainString +=
        `void set${capitalizeFirstLetter(data_member)}(${type} ${data_member},int length = 0){
            if(this->${data_member} != nullptr){
                delete this->${data_member};
            }
            this->${data_member} = new char[length+1];
            for(int i=0;i<length+1;i++){
                this->${data_member}[i] = ${data_member}[i];
            }
                this->${data_member}[length] = ${nullChar};
        }`
    return mainString
}

const setter_creator_pointers_int = (type, data_member) => {
    var mainString = ''
    mainString +=
        `void set${capitalizeFirstLetter(data_member)}(${type} ${data_member}){
            if(this->${data_member} != nullptr){
                delete this->${data_member};
            }
            this->${data_member} = new int;
            this->${data_member} = ${data_member};
        }`
    return mainString
}


const setter_creator_normal = (type, data_member) => {
    var mainString = ''
    mainString +=
        `void set${capitalizeFirstLetter(data_member)}(${type} ${data_member}){
            this->${data_member} = ${data_member};
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
      ${defaultConstructor(dataMembers, classname)}
      ${dataMembers.map((x) => {
            var type = x.split(" ")
            return getter_creator(type[0], type[1])
        }).join("\n      ")
        }
  
        ${dataMembers.map((x) => {
            var type = x.split(" ")
            if (type[0].indexOf("char*") !== -1) {
                return setter_creator_pointers_char(type[0], type[1])
            }
            else if (type[0].indexOf("int*") !== -1) {
                return setter_creator_pointers_int(type[0], type[1])
            }
            else {
                return setter_creator_normal(type[0], type[1])
            }
        }).join("\n        ")
        }

      ${destructor_creator(classname, dataMembers)}
};`
    return mainString
}





