import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './DepositAccount.module.css'

const DepositAccount = props => {
  const fields = [
    {
      fieldText: 'Số tài khoản',
      fieldName: 'so_tk'
    },
    {
      fieldText: 'CKH/KKH',
      fieldName: 'ckh_kkh'
    },
    {
      fieldText: 'Số dư',
      fieldName: 'so_du'
    },
    {
      fieldText: 'Nơi mở',
      fieldName: 'noi_mo'
    }
  ]

  const info = {
    so_tk: '0004100034723242',
    ckh_kkh: '5 năm',
    so_du: '12.000.000',
    noi_mo: 'Ea Knốp, Ea Kar, Đăk Lăk'
  }

  return (
    <Card sx={{ marginTop: '1rem', height: 'max-content' }}>
      <Box className={styles.cardContent}>
        <Typography className={styles.cardHeader}>Tài khoản tiền gửi {props.index}</Typography>
        {fields.map((item, key) => (
          <Box
            sx={{
              display: 'flex'
            }}
            key={key}
          >
            <Box className={styles.fieldContainer}>
              <Typography className={styles.field}>{item.fieldText}:</Typography>
            </Box>
            <Box>
              <Typography className={styles.fieldValue}>{info[item.fieldName]}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default DepositAccount
