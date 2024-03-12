import bcrypt from 'bcrypt'

export async function hashPassword(password: string) {
    const salt: number = 10
    return await bcrypt.hash(password, salt)
}
