import httpClient from "../httpClient";
import { mockOtpResponse } from "./dto/__mock__/otpResponse.mock";
import { RequestParameters } from "./dto/otpRequest";
import { OtpResponse } from "./dto/otpResponse";
import { toOtpResponse, toRequestParameters } from "./mappers";

const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";
const api_endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_ROUTING;

export const fetchOtpData = async (params: Partial<RequestParameters>): Promise<OtpResponse> => {
    

    const formattedParams = toRequestParameters(params); // Ensure Travelmode is correctly formatted
    console.log("Formatted Params:", formattedParams);

    if (useMock) {
        return toOtpResponse(mockOtpResponse);
    }

    try {
        const response = await httpClient.get(api_endpoint + "/otp", { params: formattedParams });
        console.log("HTTP Response Data:", response.data);

        // Check cntent for errors: Value: FEHLER
        if (response.data.toString().includes("FEHLER")) {
            throw new Error("Failed to fetch OTP data");
        }

        return toOtpResponse(response.data);
    } catch (error) {
        console.error("Error fetching OTP data:", error);
        throw new Error("Failed to fetch OTP data");
    }
};