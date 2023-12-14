


import { createStyles, Text, Title, TextInput, Button, Blockquote } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
      }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function Quote() {

  const { classes } = useStyles();
  const image = process.env.PUBLIC_URL + '/img/noImage.png'
  const history = useNavigate();

  const [quote, setQuote] = useState('');
  const [tempQuote, setTempQuote] = useState('');

  async function populateQuote() {
    const response = await fetch('http://localhost:3031/api/quote',
      {
        method: 'GET',
        headers: {
          "x-access-token": localStorage.getItem('token'),
        },
      })
      
    const data = await response.json();
    //console.log(data);

    if (data.status === 'success') {
      console.log('success');
      setQuote(data.quote);
    } else {
      console.log('no user');
      alert(data.error)
      localStorage.removeItem('token');
      history("../login", { replace: true })

    }

  }

  async function updateQuote(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3031/api/quote',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({
          quote: tempQuote
        })

      })
    const data = await response.json();
    console.log(data);

    if (data.status === 'success') {
      console.log('success');
      setQuote(tempQuote);
      setTempQuote('');
    } else {
      console.log('no user');
      alert(data.error)
      localStorage.removeItem('token');
      history("../login", { replace: true })
    }

  }


  populateQuote()
const defaultQuote = "Altlokal is more than just a place - it's a feeling of being rooted in a community that values local culture, sustainability, and creativity. From its vibrant events to its unique products, Altlokal brings together like-minded individuals to celebrate the best of what our local communities have to offer."


  return (
    <div className={classes.wrapper}>
      <form onSubmit={updateQuote} className={classes.body}>
        <Title className={classes.title}>This is Your personal Quote!</Title>
        <Blockquote cite="- You">
        {quote || defaultQuote }
        </Blockquote>



        <div className={classes.controls}>
          <TextInput
            placeholder="Write your own quote here"
            value={tempQuote}
            onChange={e => setTempQuote(e.target.value)}
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button className={classes.control} type="submit">Update quote</Button>
        </div>
      </form>
    </div>
  );
}