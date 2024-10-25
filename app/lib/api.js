export const submitReferralForm = async (data) => {
  try {
    const response = await fetch("/api/submit-injury-report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to submit referral form:", error);
    throw error;
  }
};
