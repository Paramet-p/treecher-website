import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axiosInstance from '../../config/axios';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Table_scorest() {

  const [score, setscore] = React.useState([])

  React.useEffect( async ()  => {
    let res = await axiosInstance.get("classrooms/user_takequiz")
    console.log(res.data)
    setscore(res.data[0])
  }, [])

  const rows = [
    createData( "แบบฝึกหัดที่ 2", 8, "22/02/2565", " - " ),
    createData( "แบบฝึกหัดที่ 3", 10, "04/03/2565", " - " ),
    createData( "แบบฝึกหัดที่ 4", 9, "10/03/2565", " - " ),
    createData( "แบบฝึกหัดที่ 5", 10, "17/03/2565", " - " ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "85%" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit", fontSize: 20, borderColor: "#00443b" ,background: "#5DBB63" } }} >
            <TableCell align="center">แบบฝึกหัด</TableCell>
            <TableCell align="center">คะแนน</TableCell>
            <TableCell align="left">วันที่</TableCell>
            <TableCell align="center">หมายเหตุ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit" , fontSize: 16, borderColor: "#00443b", background: "#B2D3C2"}}} >
          <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit", fontSize: 16, borderColor: "#00443b", background: "#B2D3C2" } }}
              >
                <TableCell component="th" scope="row" align="center">
                  แบบฝึกหัดที่ 1
                </TableCell>
                <TableCell align="center">{score.score}</TableCell>
                <TableCell align="left">08/02/2565</TableCell>
                <TableCell align="center">-</TableCell>
              </TableRow>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 2, fontFamily: "Kanit", fontSize: 16, borderColor: "#00443b", background: "#B2D3C2" } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}