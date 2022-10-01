import { ReactElement, FC, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Feed } from '../action-types/feeds';
import LinearProgress from '@mui/material/LinearProgress';

const Feeds: FC<any> = (props): ReactElement => {
  const { feeds, fetchFeeds } = props
  useEffect(() => {
    if (feeds.data === null && !feeds.loading)
      fetchFeeds()
  }, [feeds.data, feeds.loading, fetchFeeds])

  return (
    <TableContainer component={Paper}>
      {feeds && feeds.loading && <LinearProgress />}
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feeds && feeds.data && feeds.data.map((feed: Feed) => (
            <TableRow
              key={feed.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{feed.id}</TableCell>
              <TableCell align="center">{(new Date(feed.date)).toLocaleString()}</TableCell>
              <TableCell align="left">{feed.title}</TableCell>
              <TableCell align="left">{feed.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Feeds;