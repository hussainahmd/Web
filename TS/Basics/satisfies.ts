//Custom interface for rendering images
interface ICustomImage {
  data: string;
  width: number;
  height: number;
}

//Sample of a Custom Image
const myCustomImage: ICustomImage = {
  data: "base64",
  width: 200,
  height: 150,
};

//Image type for the user
type UserImage = string | ICustomImage;

//User interface
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: UserImage;
}

//Bad ❌
const badUser: IUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: "image-url",
};

(badUser.image as string)
badUser.image.toString()//doesn't know this is string

//Good ✅
const goodUser = {
  id: 1,
  firstName: "Alex",
  lastName: "Brooks",
  image: 'url',
} satisfies IUser;

goodUser.image.toUpperCase()
export {};