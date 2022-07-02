class Worker {
  constructor(name, age = 0, skills = [], kids = false) {
    this.name = name
    this.age = age
    this._skills = skills
    this.kids = kids
  }

  get skills() {
    return this._skills
  }

  set skills(str) {
    this.skills.push(str)
  }

  sayHello() {
    return `Привет, меня зовут ${this.name}, мне ${this.age} лет ${this.skills}`
  }
}

class Mechanic extends Worker {
  constructor(name, age, skills, kids, major) {
    super(name, age, skills, kids) 
    this._major = major
  }

  get major () {
    return this._major
  }

  set major (str) {
    this.major = str
  }

  introduce() {
   return  `Моя специальность: ${this.major}\nМои навыки: ${this.skills}`
  }

  haveKids() {
    if(this.kids) {
      return 'У меня есть дети'
    } else {
      return 'У меня нет детей'
    }
  }
}

class Driver extends Worker {
  constructor(name, age, skills, kids, major) {
    super(name, age, skills, kids) 
    this._major = major
  }
  get major () {
    return this._major
  }

  set major (str) {
    this.major = str
  }

  introduce() {
   return  `Моя специальность: ${this.major}\nМои навыки: ${this.skills}`
  }

  haveKids() {
    if(this.kids) {
      return 'У меня есть дети'
    } else {
      return 'У меня нет детей'
    }
  }
  

}

const mechanic = new Mechanic('Viktor', 30, "ремонт грузовых автомобилей", false, 'автомеханик');
const driver = new Driver('Dima', 40, "права всех категорий", true, 'водитель')

console.log(mechanic.introduce())
console.log(mechanic.haveKids())

console.log(driver.introduce())
console.log(driver.haveKids())


