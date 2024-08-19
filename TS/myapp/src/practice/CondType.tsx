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

type Male = {
    name: string,
    gender: 'male',
    salary: number
}
type Female = {
    name: string,
    gender: 'female',
    weight: number
}
type Person1 = Male | Female
type Person2 = {
    name: string
} & (Male | Female)

type Person_Bad = {
    name: string,
    gender: 'male' | 'female',
    salary?: number,
    weight?: number
}

const Child = (props: Person2) => {
    if (props.gender === 'male')
        return <div>male {props.salary} </div>
    else
        return <div>female {props.weight} </div>
}

const Parent = () => {
    return <Child name="hon" salary={1000000000000000} gender='male' />
}
