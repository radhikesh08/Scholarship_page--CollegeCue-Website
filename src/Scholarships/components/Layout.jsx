import { Container, Stack, Typography, Box, Button, List, ListItem, TableContainer, Table, TableRow, TableCell, } from '@mui/material'
import React from 'react'


export default function Layout() {
       

    return (
<>

        <Box 
            sx={{
               width: '1000px',
                // top: '195px',
                borderRadius: '28px',
                color: '#FFFFFF',
                boxShadow: '0px 0px 40px 0px #7B90FF26',
                // paddingTop: '5px',
               
            }}>
         

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    
                    color: '#210366',
                    paddingBottom:'0.5rem',
                    marginLeft:'1rem'
                }} >
                    Tata Scholarship - Cornell University
                </Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    // letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'0.5rem',
                    marginLeft:'1rem'
                    
                }}>
                    The Tata Education and Development Trust, which is associated with the Tata Group, majorly focuses to divide the financial load of the students who are willing to hone their skills and prepare well for a bright future. Over USD 25 million have been endowed by the trust which will allow Cornell University Tata Scholarship to provide funds to UG students from all over India.
                </Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    // letterSpacing: '0em',
                     textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'0.5rem',
                    marginLeft:'1rem'
                }}>The Cornell University Tata Scholarship program awards approximately 20 scholarships to Indian students. Through this, the trust ensures that academically excellent students from India have access to Cornell University, regardless of their financial conditions. The Tata scholarship amount will be awarded annually for the four-year program. The scholarship amount covers the expense of tuition fees and annual course fees.
                </Typography>

   <Box sx={{paddingBottom:'1.5rem',paddingTop:'1rem',paddingLeft:'3rem'}}>
                <Button variant='contained' sx={{
                    borderRadius: '12px',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '22.77px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                    backgroundColor: '#7B90FF',
                //  width: '835px',
                    // marginLeft: '65px',
                    // margin:'16px',
                    marginLeft:'1rem'
                    
                }}>Checkout other Cornell University Scholarships for Indian Students</Button>
</Box>


                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>The Tata Cornell Scholarship program is applicable for all the Cornell Undergraduate degree programs. However, preference will be given to students accepted for the following undergraduate degree programs:</Typography>


                <Box sx={{
                        // width: '1004px',
                        // height: '244px',
                        top: '684px',
                        // left: '242px',
                       margin:'12px',
                       paddingBottom:'1rem'
                    }}>

                    <TableContainer>
                        <Table aria-label='simple table' sx={{
                            fontFamily: 'Poppins',
                            fontSize: '17px',
                            fontWeight: '400',
                            lineHeight: '22px',
                            letterSpacing: '0em',
                            // textAlign: 'left',
                            color:'#210366',
                            border: '1px solid #7B90FF33'
                        }}>
                            <TableRow>
                                <TableCell>Bachelor of Science in Engineering Physics</TableCell>
                                <TableCell>Bachelor of Science in Civil Engineering</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Bachelors of Science Electrical and Computer Engineering</TableCell>
                                <TableCell>Bachelor of Science in Environmental Engineering</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Bachelor of Science in Hotel Administration</TableCell>
                                <TableCell>Bachelor of Science in Computer Science</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>Bachelor of Science in Chemical Engineering</TableCell>
                                <TableCell>Bachelor in Economics</TableCell>
                            </TableRow>

                        </Table>
                        </TableContainer> 

                </Box>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>For B.Arch students, the university only offers the scholarship for eight semesters. Moreover, scholarship funds are not applicable for dual-degree programs or additional semesters.</Typography>

<Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#210366',
                   margin: '2px',
                   paddingBottom:'1rem',
                   marginLeft:'1rem'
                }}>
                   Highlights
                </Typography>

                  
                <Box sx={{
                    // width: '1005px',
                    height:'600px',
                    // top: '1122px',
                    left: '241px',
                    // paddingBottom:'1rem'
                  }}>

<TableContainer>
    <Table aria-label='simple table' sx={{
        fontFamily: 'Poppins',
      color:'#210366',
       left: '241px',
       
//    width: '1005px',
        
    //    top: '1122px',
   }}>
        <TableRow >
            <TableCell>Scholarship Type</TableCell>
            <TableCell>College-Specific, Full-Ride-Scholarships, Need-Based</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>Offered by</TableCell>
            <TableCell>Trust</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>Organization</TableCell>
            <TableCell>TATA Trust</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>Application Deadline</TableCell>
            <TableCell>Mar 15 ,2023</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>No. of Scholarships</TableCell>
            <TableCell>20</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>Amount</TableCell>
            <TableCell>Variable</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>Renewability</TableCell>
            <TableCell>Yes, Yearly</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>International Students Eligible</TableCell>
            <TableCell>Yes</TableCell>
        </TableRow>

        <TableRow >
            <TableCell>Scholarship Website Link</TableCell>
            <TableCell>https://admissions.cornell.edu/apply/international-students/tata-scholarship</TableCell>
        </TableRow>


    </Table>
    </TableContainer> 

</Box>



                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>
                    Eligibility Criteria
                </Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                //    maxWidth: '1009px',
                }}>To be considered for the UG Tata Scholarship at Cornell University, an applicant must fulfill the eligibility criteria given below:</Typography>

                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        color: '#210366', fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        letterSpacing: '0em',
                        // textAlign: 'left',
                        // maxWidth: '1009px',

                    }}
                >
                    <ListItem sx={{
                        display: 'list-item',
                    }}>
                        Nationality: Must an Indian citizen/resident.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', color: '#210366' }}>
                        Be a pass out from any Indian senior secondary school.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', color: '#210366' }}>
                        Financial Requirement: Must qualify for need-based financial aid.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', color: '#210366' }}>
                        English Language Proficiency: Must submit either TOEFL or IELTS score.
                        <ListItem sx={{ display: 'list-item', color: '#210366' }}>
                            TOEFL-iBT: 100
                        </ListItem>
                        <ListItem sx={{ display: 'list-item', color: '#210366' }}>
                            IELTS: 7.0
                        </ListItem>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', color: '#210366' }}>
                        Admission Status: Must have an admission offer from Cornell University for any undergraduate degree program.
                    </ListItem>

                </List>
                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>Prospective applicants must note that special preference will be given to students from art, engineering, agriculture, applied economics and management, biological science, life science, and other science students.</Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>Application Process</Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    marginLeft:'1rem'
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                }}>The students are supposed to complete the College Scholarship Service (CSS) profile to fulfill the requirements of the application process. As a part of the application process, students must complete two application forms before March 15, 2023:</Typography>

                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        color: '#210366', fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        letterSpacing: '0em',
                        // textAlign: 'left',
                        // maxWidth: '1009px',
                        paddingBottom:'1rem'
                    }}
                >
                    <ListItem sx={{ display: 'list-item' }}>
                        Cornell University Tata Scholarship Application
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Need-based Financial Aid Form for International Students
                    </ListItem>
                </List>
                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    paddingBottom:'1rem'
                }}>Some important details to be provided at the time of the application are:
                </Typography>

                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        color: '#210366', fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        // maxWidth: '1009px',
                    }}
                >
                    <ListItem sx={{ display: 'list-item' }}>
                        Self-income and parent’s income
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Noncustodial parent asset and income
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Citizenship documents
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Photocopy of the Passport
                    </ListItem>
                </List>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    paddingBottom:'1rem'
                }}>Selection Process</Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>Students need to fill the details in the application form carefully because the Cornell University Tata Scholarships is awarded purely based on the details and the documents that have been submitted during the application process. Some of the aspects that will be looked into for the selection are:</Typography>


                <List
                    sx={{
                        listStyleType: 'disc',
                        listStylePosition: 'inside',
                        color: '#210366', fontFamily: 'Poppins',
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '20px',
                        letterSpacing: '0em',
                        // textAlign: 'left',
                        // maxWidth: '1009px',
                        paddingBottom:'1rem'
                    }}
                >
                    <ListItem sx={{ display: 'list-item' }}>
                        Academic qualifications
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Family income
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        Citizenship
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        English Language Proficiency test Score
                    </ListItem>
                </List>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>The shortlisted candidate list will be released on the official portal of Cornell University and hence the students after applying are suggested to have a consistent look at the portal for the results and any other important notices. Recipients of the scholarship will be funded for the duration of their Cornell undergraduate program.</Typography>


                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '36px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#210366',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>Grant Details</Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    marginLeft:'1rem'
                    // maxWidth: '1009px',
                }}>The partnership between Cornell University and the Tata Trust provides the students with a wide scope to pursue a professional degree program at a globally recognized university. Each year, 20 Indian students are supported under this scholarship. However, the Cornell University Tata Scholarship amount only covers the recipient’s tuition and fees.</Typography>

                <Typography sx={{
                    color: '#210366',
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    // maxWidth: '1009px',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>Since this a need-based scholarship, it is ensured that the recipients receive funding to complete their four-year undergraduate degree. For programs that require ten-semesters of full-time enrollment (for instance B.Arch), funds are available for eight semesters only. Scholarship applications for the upcoming session will be accepted from November 2022 to March 15, 2023.</Typography>

                { /* ..............Contact Details.............. */}

                <Typography sx={{
                    fontFamily: 'Poppins',

                    fontSize: '21px',
                    fontWeight: '600',
                    letterSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    paddingBottom:'1rem',
                    marginLeft:'1rem'
                }}>Contact Details</Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letteSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    marginLeft:'1rem'
                }}><Typography variant='p' fontWeight="700"> Address:</Typography> Office of Financial Aid and Student Employment, 203 Day Hall, Cornell University</Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letteSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    marginLeft:'1rem'

                }}><Typography variant='p' fontWeight="700"> Telephone: </Typography> 607-255-5145; Fax: 607-255-6329</Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letteSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',marginLeft:'1rem'


                }}> <Typography variant='p' fontWeight="700"> Mailling ID: </Typography> Finaid@cornell.edu</Typography>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letteSpacing: '0em',
                    // textAlign: 'left',
                    color: '#210366',
                    marginLeft:'1rem'


                }}><Typography variant='p' fontWeight="700"> Office Hours: </Typography> Monday to Friday 8 a.m. to 4:30 p.m. except for Tuesday 9:30 a.m. to 4:30 p.m.</Typography>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letteSpacing: '0em',
                    marginLeft:'1rem',
                    // textAlign: 'left',
                    color: '#210366',


                }}><Typography variant='p' fontWeight="700">Counselors Available: </Typography> Monday to Friday 12 p.m. to 3:30 p.m. </Typography>
            
           
          

      </Box>

        
</>
        
    )
}
