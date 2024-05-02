export const uploadToCloudinary = async(pics) => {

    const CLOUDINARY_URL="https://api.cloudinary.com/v1_1/dgfhqrnxv/image/upload"

    if(pics) {
        const data = new FormData();
        data.append("file", pics)
        data.append("upload_preset", "twitter")
        data.append("cloud_name", "dgfhqrnxv")

        const res = await fetch(CLOUDINARY_URL,
            {
                method: "post",
                body:data
            }
        )

        const fileData = await res.json();
        return fileData.url.toString();
    } 
    else console.log("error from upload function.")

}