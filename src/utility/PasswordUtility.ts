import brcypt from 'bcrypt';



export const GenerateSalt = async () => {
    return await brcypt.genSalt();
};

export const GeneratePassword = async (password: string, salt: string) => {
    return await brcypt.hash(password, salt);
};

export const ValidatePassword = async (givenPassword: string, salt: string, savedPassword: string) => {
    return await GeneratePassword(givenPassword, salt) === savedPassword;
};



