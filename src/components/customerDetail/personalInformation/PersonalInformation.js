import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './PersonalInformation.module.css'

const PersonalInformation = () => {
  const fields = [
    {
      fieldText: 'Mã khách hàng',
      fieldName: 'ma_khach_hang'
    },
    {
      fieldText: 'Họ và tên',
      fieldName: 'ho_va_ten'
    },
    {
      fieldText: 'Căn cước công dân',
      fieldName: 'cccd'
    },
    {
      fieldText: 'Ngày sinh',
      fieldName: 'ngay_sinh'
    },
    {
      fieldText: 'Địa chỉ thường trú',
      fieldName: 'dc_thuong_tru'
    },
    {
      fieldText: 'Địa chỉ tạm trú',
      fieldName: 'dc_tam_tru'
    },
    {
      fieldText: 'Email',
      fieldName: 'email'
    },
    {
      fieldText: 'Số điện thoại',
      fieldName: 'sdt'
    },
    {
      fieldText: 'Tên công ty',
      fieldName: 'ten_cty'
    },
    {
      fieldText: 'Địa chỉ công ty',
      fieldName: 'dc_cty'
    }
  ]

  const info = {
    ma_khach_hang: 'KH00001',
    ho_va_ten: 'Lê Văn Bằng',
    cccd: '066202011226',
    ngay_sinh: '25/11/2002',
    dc_thuong_tru: 'Huyện Ea Kar, tỉnh Đăk Lăk',
    dc_tam_tru: 'Ký túc xá khu A ĐHQG, Linh Trung, Thủ Đức, Tp Hồ Chí Minh',
    email: 'emailofbang@gmail.com',
    sdt: '0368514122',
    ten_cty: 'Công ty TNHH Bách khoa',
    dc_cty: 'Dĩ An, Bình Dương'
  }

  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <Box className={styles.cardContent}>
        <Typography className={styles.cardHeader}>Thông tin cá nhân</Typography>
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

export default PersonalInformation
