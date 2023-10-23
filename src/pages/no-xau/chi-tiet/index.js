import { Grid, Box } from '@mui/material'

import PersonalInformation from 'src/components/customerDetail/personalInformation/PersonalInformation'
import StaffInCharge from 'src/components/customerDetail/staffInCharge/StaffInCharge'
import LegalDocument from 'src/components/customerDetail/legalDocument/LegalDocument'
import DebtInformation from 'src/components/customerDetail/debtInformation/DebtInformation'
import DepositAccount from 'src/components/customerDetail/depositAccount/DepositAccount'
import CNPGDProgress from 'src/components/customerDetail/tables/cnPGDProgress/CNPGDProgress'
import DebtRecoveryProgess from 'src/components/customerDetail/debtRecoveryProgess/DebtRecoveryProgess'
import LawsuitReviewSubmission from 'src/components/customerDetail/lawsuitReviewSubmission/LawsuitReviewSubmission'
import LawsuitProgressAndExecution from 'src/components/customerDetail/lawsuitProgressAndExecution/LawsuitProgressAndExecution'

const CustomerDetail = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item md={7}>
          <PersonalInformation />
          <DebtInformation />
        </Grid>
        <Grid item md={5}>
          <StaffInCharge index={1} />
          <StaffInCharge index={2} />
          <LegalDocument />
          <DepositAccount index={1} />
          <DepositAccount index={2} />
        </Grid>
      </Grid>
      <Grid>
        <CNPGDProgress />
        <DebtRecoveryProgess />
        <LawsuitReviewSubmission />
        <LawsuitProgressAndExecution />
      </Grid>
    </Box>
  )
}

export default CustomerDetail
