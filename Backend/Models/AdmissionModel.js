import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  aadhaarNo: { type: String, required: true },
  dob: { type: Date, required: true },

  fatherName: { type: String, required: true },
  fatherMobile: { type: String, required: true },
  fatherEmail: { type: String, required: false },
  fatherHomeAddress: { type: String, required: true },
  fatherWorkAddress: { type: String, required: false },
  fatherOccupation: { type: String, required: true },
  fatherIncome: { type: String, required: true },

  motherName: { type: String, required: true },
  motherMobile: { type: String, required: true },
  motherEmail: { type: String, required: false },
  motherHomeAddress: { type: String, required: true },
  motherWorkAddress: { type: String, required: false },
  motherOccupation: { type: String, required: true },
  motherIncome: { type: String, required: true },

  height: { type: String, required: false },
  weight: { type: String, required: false },
  bloodGroup: { type: String, required: false },
  allergicTo: { type: String, required: false },
  majorHealthProblem: { type: String, required: false },
  chronicHealthProblem: { type: String, required: false },
  identificationMarks: { type: String, required: false },
  familyHealthCondition: { type: String, required: false },

  previousAdmission: { type: String, required: true },
  previousAdmissionDetails: { type: String, required: false },
  pastSchoolName: { type: String, required: false },
  admissionClass: { type: String, required: false },
  yearOfAdmission: { type: String, required: false },
  yearOfLeaving: { type: String, required: false },
  reasonForLeaving: { type: String, required: false },

  reasonForChoosingSchool: { type: String, required: true },
  specialActivity: { type: String, required: false },
  specialBehavior: { type: String, required: false },

  guardianName: { type: String, required: true },
  declarationDate: { type: Date, required: true },
});

const admissionModel =
  mongoose.models.admission || mongoose.model("admission", admissionSchema);

export default admissionModel;
