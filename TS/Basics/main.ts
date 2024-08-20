
// type stringOrNumber = string | number
// type s_n_u_Array = (string | number | undefined)[]

// type Person = {
//     fname: string,
//     lname?: string,
//     age: stringOrNumber,
//     sex: string,
//     isGood: boolean,
//     words: s_n_u_Array,
//     other: string | undefined
// }

// let p1: Person | undefined = {
//     fname: 'Hussain',
//     // lname: 'Ahmad',
//     age: 22,
//     sex: 'male',
//     isGood: true,
//     words: ['a', 1, undefined],
//     other: undefined
// }

// console.log(p1.fname)

// function set(obj: (Person | undefined)) {

//     console.log(obj?.lname ? 'yes': 'no')
// }

// set(p1)

// enum Grade {
//     A,
//     B,
//     C = 9,
//     D,
//     E,
//     U
// }

// console.log(Grade)

////Literal types
// type name = 'Ali' | 'Saad' | 'Bill'
// let n:name = 'Saad'
// console.log(n)

// let x: 1 | 2 | 3 = 2

// type mathFunction = (a:number, b:number) => number

// const mF: mathFunction = (a = 4, b = 3) => { //can't use default with type
//     return a * b
// }
// console.log(mF(3, 2))

// const add = (a:number = 4, b:number = 5, c?:number): number => {
//     if(c)
//         return a + b + c
//     return a + b
// }

// console.log(add())

// function total (a?: number, ...b: number[]) {
//     return b.reduce((prev, curr, ind, arr) => {
//         console.log(`'index: ${ind}, pre: ${prev}, curr:${curr}, arr: ${arr}`)
//         return prev + curr
//     })
// }
// let a = [2, 3, 6, 8, 10]
// console.log(total(1, ...a))

// const img = document.querySelector('img')! //explicitly saying that it's not null
// const img2 = document.getElementById('#img') as HTMLImageElement

// img.src
// img2.src

// type one = string
// type two = number | string
// type three = 'helloz'

// let v1:one = 'hello'
// let v2 = v1 as two
// v2 = 6
// let v3:three = v1 as three
// v3 = 'helloz'

// console.log( v1,  v2,  v3)

const routes = {
    home: '/',
    admin: '/admin',
    user: '/users',
    newUser: '/user/new'
} as const

type RoutesType1 = typeof routes.admin | typeof routes.home | typeof routes.user | typeof routes.newUser

type RoutesObjType = typeof routes
type RouteKeys = keyof typeof routes
type RoutesType = RoutesObjType[RouteKeys]

// type c = RoutesType[keyof typeof routes]['admin']

const goToRoute = (route: RoutesType1) => { }

goToRoute('/admin')

/************************Discriminating unions***********************************/

type LoadingLocationState = {
    state: 'Loading'
}
type SuccessLocationState = {
    state: 'Success',
    coords: { lat: number; lon: number }
}
type ErrorLocationState = {
    state: 'Error'
    error: { message: string }
}

type LocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState

type LocationState_Bad = {
    state: 'Loading' | 'Success' | 'Error',
    coords?: { lat: number; lon: number },
    error?: { message: string }
}


function printLocation(location: LocationState) {
    switch (location.state) {
        case 'Loading':
            console.log(location.state)
            break
        case 'Success':
            console.log(location.coords.lat, location.coords.lon)
            break
        case 'Error':
            console.log(location.error.message)
            break
        default:
            break
    }
}

/***********************************************************/

