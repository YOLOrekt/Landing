// import constants from '../constants';

const initialState = {
  members: [
    {
      avatar: 'yog.png',
      name: 'Yogesh Srihari',
      title: 'Head of Product',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/yogesh-srihari-000b3a33/',
      brief: 'Co-founded Spankchain in 2017, which raised $11 million in token sales.Prior to Spankchain, Yogesh worked as Lead Software Engineer at ZEFR, Director ofEngineering at Wickr, and Software Engineer at Google. Yogesh holds a Mastersdegree from Stony Brook University, under Joseph Mitchell.'
    },
    {
      avatar: 'Sergey-Nikitin-Large.jpg',
      name: 'Sergey Nikitin',
      title: ' Head of Technology',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/snikitin2/',
      brief: '​Founded xCoins.io, an innovative peer-to-peer cryptocurrency lending platformthat allows nearly instant acquisition of bitcoin. Prior to xCoins.io, Sergey worked atMicrosoft. Sergey holds a BS degree in Computer Science and an MBA degree fromUniversity of California, Los Angeles.'
    },
    {
      avatar: 'MichelleKim.jpg',
      name: 'Michelle Kim',
      title: 'Head of Operations',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/michelle-kim-05086213a/',
      brief: 'Leading operations at LQDEX, Michelle has a focus on management andensuring employee success. After studying Cognitive Psychology at the University ofCalifornia - Irvine, Michelle dived into crypto and blockchain technology, joiningxCoins.io in January 2017.'
    },
    {
      avatar: 'PatrickMaher.jpg',
      name: 'Patrick Maher',
      title: 'Head of Client Relations',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/patrick-maher-6b7b0b7b/',
      brief: 'Managing client relations, Patrick promises customer satisfaction. Since 2014,Patrick has been a self-proclaimed cryptocurrency aficionado, with a passion for mining.Patrick holds a Bachelor of Science degree in Computer Information Systems fromColorado State University.'
    },
    {
      avatar: 'EthanReynolds.jpg',
      name: 'Ethan Reynolds',
      title: 'Head of Public Relations',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ethan-reynolds-73b50663/',
      brief: 'Directing all public relations and social media efforts, Ethan focuses on creatinga cohesive brand message. Ethan has launched several international brands, resultingin placements in top-tier publications including TechCrunch and Forbes. Ethan holds aBachelor of Science degree in Communication and Public Relations from FlaglerCollege.'
    },
    {
      avatar: 'viktoriaBovenko.jpg',
      name: 'Viktoria Bovenko',
      title: 'UX/UI Designer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/viktoria-bovtenko-9844794a/',
      brief: 'With more than 10 years of experience in modern UX and UI, Viktoria contributes innovate techniques to visual and interactive design.'
    },
    {
      avatar: 'ajishnew.jpg',
      name: 'Ajish Pillai',
      title: 'Solutions Architect',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ajish-pillai-7575b0104/',
      brief: 'As Solutions Architect, Ajish enables innovation. Ajish has extensive ITarchitecture design and development experience, with a focus on enterpriseapplications. Ajish has worked with several banking, hedge fund, telecommunicationand e-commerce Fortune 500 companies.'
    },
    {
      avatar: 'RamKumar.jpg',
      name: 'Ram Kumar',
      title: 'Lead Engineer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/ramkumardevaraj/',
      brief: 'Serving as the lead engineer, Ram drives innovative strategies. Prior to LQDEX,Ram co-founded a successful cloud and data startup, which scaled more than 2,000%in two years. Ram has substantial experience in web, mobile and algorithmdevelopment with Motorola and Texas Instruments, among others.'
    },
    {
      avatar: 'erikHan.jpg',
      name: 'Erik Han',
      title: 'Software Engineer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/erik-han-406814a1/',
      brief: 'Having developed over 20 websites for global and regional companies,​​Erik hasstrong capabilities in producing aesthetically pleasing, functional websites. Erikgraduated from Shanghai University’s School of Computer Engineering and Sciencewith a degree in Computer Science.'
    },
    {
      avatar: 'AndresCortes.jpg',
      name: 'Andrés Cortés',
      title: 'Full Stack Web Developer',
      advisor: '',
      myLink: 'https://www.linkedin.com/in/andr%C3%A9s-cort%C3%A9s-zald%C3%ADvar-69a3a766/',
      brief: 'Andrés handles logic, database interactions, and user authentication. Andrésis a well-versed developer with more than five years of experience in web, mobile anddesktop applications. Andrés has advised two proof-of-concept projects based onblockchain technology.'
    }
  ]
};

/* eslint-disable */
const team = (state = initialState, action) => {
  switch (action.type) {

    default: return state;
  }
};

export default team;