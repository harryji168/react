import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Button, Header, Image, Modal,Icon } from 'semantic-ui-react'
import Aos from "aos"
import React, {useEffect } from 'react'
import "aos/dist/aos.css";


const images = [
    {
      src: "projects/e_commerce.png",
      title: 'B/U Online Clothing Store',
      width: '30%',
      description:`An Online for clothing store for retailers to sell their product.
      ReactJs front end Client built with Semantic UI and Bootstrap,
      Rails API for Backend with PostgreSQL, Stripe API and Google Maps/Places API `,
      technology:["Ruby on Rails", "ReactJS", "Bootstrap","SemanticUI", "PosgreSQL","Stripe","Google Maps"],
      github:"https://github.com/betzmnl03/e_commerce_app",
      app:"https://vimeo.com/531507670"
    },
    {
      src: "projects/pm_tool.png",
      title: 'Project Management Tool',
      width: '30%',
      description:"A Project Management tool with CRUD functionalities  that allows the users to \
      1. Create, edit and delete Projects \
      2. Create, edit and delete Tasks \
      3. Add tags to the projects \
      4. Track tasks and project Status \
      5. Assign Members to projects and tasks \
      6. Have discussions \
      7. Create comments \
      8. Mark proejct as Favourite \
      9. Start new discussion and post comments",
      technology:["Ruby on Rails", "HTML","CSS", "Bootstrap", "PosgreSQL"],
      github:"https://github.com/betzmnl03/pm_tool",
      app:"https://betsys-pm-tool.herokuapp.com/"
    },
    {
      src: "projects/idea_factory.png",
      title: 'IDEA FACTORY',
      width: '30%',
      description:`Idea Factory is an application that allowd the user to “collect a large number of ideas” with
      capabilities to create, like, follow and post comments. Full Stack web application built using Ruby
      on Rails, PostgreSQL, Bootstrap, HTML, CSS.`,
      technology:["Ruby on Rails", "Bootstrap","HTML","CSS", "PosgreSQL"],
      github:"https://github.com/betzmnl03/ideas_crud",
      app:"https://betsys-idea-factory.herokuapp.com/"
    },
    {
      src: "projects/portfolio.png",
      title: 'MY PORTFOLIO',
      width: '30%',
      description:`My personal portfolio created with ReactJs and UI libraries such as SemanticUI, Material UI, Bootstrap `,
      technology:["React","SemanticUI","MaterialUI","Bootstrap"],
      github:"https://github.com/betzmnl03/portfolio_react",
      app:""
    },
    {
      src: "projects/team_picker.png",
      title: 'TEAM PICKER',
      width: '30%',
      description:`The Team Picker app allows the user to store cohorts information, randomizing teams and assigning members randomly`,
      technology:["NodeJS", "Express","Bootstrap","Knex.js", "PosgreSQL"],
      github:"https://github.com/betzmnl03/teampicker",
      app:""
    },
    {
      src: "projects/hangman.png",
      title: 'HANGMAN',
      width: '30%',
      description:`Hangman is a classic word game in which you must guess as many secret words as you can.
      Developed using jQuery, Bootstrap, HTML, CSS and JavaScript.`,
      technology:["jQuery","Bootstrap","HTML","CSS","Javascript"],
      github:"https://github.com/betzmnl03/betsys-hangman",
      app:"https://betsys-hangman.vercel.app/"
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    //   minWidth: ,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 350,
      [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        // maxWidth: "100%",
        height: 150,
        margin:"2%"
        
      },
      
      marginLeft: 20,
      marginRight: 10,

      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          background:"black",
          opacity: "0.7",
          // color: "whit",
          border: '4px solid white',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
     
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundRepeat: "no-repeat",
      backgroundSize: '100%',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  function exampleReducer(state, action) {
    console.log(action.id)
    switch (action.type) {
      case 'OPEN_MODAL':
        return { open: true, dimmer: action.dimmer, id: action.id}
      case 'CLOSE_MODAL':
        return { open: false }
      default:
        throw new Error()
    }
  }
  
export default function ProjectsSection() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
    id: undefined
  })
  useEffect(() => {
    Aos.init({duration: 500})
}, [])
  const { open, dimmer,id } = state
    const classes = useStyles();
    return (

        <>
        <div style={{
          backgroundColor:"black",
          
          
        }}>
      <div id="projects" style={{
        margin:"2%",
        paddingTop: "60px"
      }} >
        <Grid container 
        justify="center"
        alignItems="center"
        >
            <Grid item>
              <p textAlign="center" className="resumetext" style={{
                
                color:"white",
                
              }}>PROJECTS</p>
              </Grid>
            
                <div className={classes.root}>
             
               {images.map((image,i) => (
                    
                    <ButtonBase
                    focusRipple
                    key={i}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                    data-aos="flip-up"
                    >
                    <span
                        className={classes.imageSrc}
                        style={{
                        backgroundImage: `url(${image.src})`
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                                <Typography
                                key={image.id}
                                // imageInfo={image}
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}
                                onClick={() => dispatch({ type: 'OPEN_MODAL', id:i, dimmer:"blurring"}
                                )}
                                >
                                {image.title}
                                <span className={classes.imageMarked} />
                                </Typography>


                    </span>

                    <Modal
                      closeIcon={{ style: { top: '0.8rem', right: '1rem' }, color: 'black', name: 'close'}}
                      dimmer={dimmer}
                      open={open}
                      onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
                      id={id}
                      size="medium"
                      
                     
                    >      
                      {id !== undefined ? 
                      <React.Fragment >
                      <Modal.Header className="mb-4 text-center"  data-aos="flip-up">{images[id].title} </Modal.Header>
                      <Modal.Content 
                      className="mt-2"image>
                        <Image size='xlarge' src={images[id].src} />
                      </Modal.Content>
                      <Modal.Content>
                      <Modal.Description>
                        <Header></Header>
                        <p>{images[id].description}
                        </p>
                        <br/>


                        <p className="techProject text-center">Tech Stack: {images[id].technology.join(", ")}</p>
                      
                      </Modal.Description>

                    </Modal.Content>
                    
                       
                      <Modal.Actions className="text-center">
                      <a href={images[id].github} target="_blank" rel="noreferrer">
                        <Button icon labelPosition='left' color="black">
                          <Icon name="github"/>
                          View Source
                          
                        </Button>
                        </a>
                        {images[id].app.length>0 ? 
                        <a href={images[id].app} target="_blank" rel="noreferrer">
                        <Button icon labelPosition='left' color="black">
                        <Icon name="globe"/>
                          View App
                        </Button>
                        </a>
                        :""}
                      </Modal.Actions>
                      </React.Fragment>
                        :""}
                    </Modal>
                    </ButtonBase>
                  
             
       
      ))
      }
      </div>
        </Grid>
        </div>
        </div>
        </>
    )
    
}
