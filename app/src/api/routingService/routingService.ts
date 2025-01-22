import httpClient from "../httpClient";
import { mockOtpResponse } from "./dto/__mock__/otpResponse.mock";
import { RequestParameters } from "./dto/otpRequest";
import { OtpResponse } from "./dto/otpResponse";
import { toOtpResponse } from "./mappers";

const useMock = process.env.USE_MOCK === "true";

export const fetchOtpData = async (params: Partial<RequestParameters>): Promise<OtpResponse> => {
    if (useMock) {
        return toOtpResponse(mockOtpResponse);
    }

    try {
        const response = await httpClient.get("/otp-endpoint", { params });
        return toOtpResponse(response.data);
    } catch (error) {
        console.error("Error fetching OTP data:", error);
        throw new Error("Failed to fetch OTP data");
    }
};