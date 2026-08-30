import donationModel from "../Models/DonationModel.js";

const submit = async (req, res) => {
  try {
    const form = new donationModel({
      name: req.body.name,
      address: req.body.address,
      contact: req.body.contact,
      scopeOfEngagement: req.body.scopeOfEngagement,
      whateverYouWantDetails: req.body.whateverYouWantDetails,
      othersDetails: req.body.othersDetails,
    });

    await form.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error submitting donation form" });
  }
};

export default submit;
