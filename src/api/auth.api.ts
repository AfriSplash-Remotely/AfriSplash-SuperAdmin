import axios from "@/utils/axios";

export const login = async (payload: { email: string, password: string }) => {
    const {
        data: { data },
    } = await axios.post(
        `/auth/login`, payload
    );
    return data;
};
