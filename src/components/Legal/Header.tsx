import Box from '@mui/material/Box';
import LegalAppBar from './AppBar';
import LegalTitle from './Title';

type Props = {
    title: string
    subtitle?: string
}

export default function LegalHeader({ title, subtitle }: Props) {
  return (
    <Box>
      <LegalAppBar />
      <LegalTitle title={title} subtitle={subtitle} />
    </Box>
  );
}
