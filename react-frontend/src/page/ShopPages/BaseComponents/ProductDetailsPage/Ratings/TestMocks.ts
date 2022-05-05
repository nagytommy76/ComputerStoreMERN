export const mockAvgRating = {
   status: 200,
   data: {
      avgRating: 2.8333333333333335,
      rateCount: 3,
   },
}

export const mockGetCommentsToAddNew = {
   status: 200,
   data: [
      {
         _id: '61534c48f49a34129c48c0fc',
         comment: 'Az árához képest so-so',
         commentAnswers: [
            {
               answer: 'Az egy jó kártya volt a maga idejében :)',
               answeredAt: '2021-11-15T19:28:45.924Z',
               responses: [],
               userId: '6134ac45824b6c129cd0859b',
               userName: 'senki123',
               _id: '6192b4ede1b9411844247064',
            },
         ],
         ratedAt: '2021-09-28T17:09:28.765Z',
         rating: 2.5,
         userId: '614f39ce51587c3450377112',
         userName: 'senki321',
         responses: [
            { isLike: false, userId: '6134ac45824b6c129cd0859b', _id: '61535adc634bea29b4542ab1' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb7d95d8e103842d13af',
            },
         ],
      },
      {
         _id: '61534c68f49a34129c48c10e',
         comment: 'Ár érték arányban nem rossz ,de a világot nem fogja megváltani :)',
         commentAnswers: [],
         ratedAt: '2021-09-28T17:10:00.695Z',
         rating: 4.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'nagytommy76',
         responses: [
            { isLike: true, userId: '6134ac45824b6c129cd0859b', _id: '6153508d2ba2282324b2c824' },
            {
               isLike: true,
               userId: '614f39ce51587c3450377112',
               _id: '6159b51995d8e103842d132a',
            },
         ],
      },
   ],
}

export const mockGetCommentsToDeleteAnswer = {
   status: 200,
   data: [
      {
         _id: '61534c48f49a34129c48c0fc',
         comment: 'Az árához képest so-so',
         commentAnswers: [
            {
               answer: 'Ez egy teszt válasz senki321 részére, nagytommy76-tól',
               answeredAt: '2021-10-11T14:28:25.924Z',
               responses: [],
               userId: '60f3f0b9c7f8211424864a2c',
               userName: 'nagytommy76',
               _id: '6192b4ede1b9411844247999',
            },
            {
               answer: 'Az egy jó kártya volt a maga idejében :)',
               answeredAt: '2021-11-15T19:28:45.924Z',
               responses: [],
               userId: '6134ac45824b6c129cd0859b',
               userName: 'senki123',
               _id: '6192b4ede1b9411844247064',
            },
         ],
         ratedAt: '2021-09-28T17:09:28.765Z',
         rating: 2.5,
         userId: '614f39ce51587c3450377112',
         userName: 'senki321',
         responses: [
            { isLike: false, userId: '6134ac45824b6c129cd0859b', _id: '61535adc634bea29b4542ab1' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb7d95d8e103842d13af',
            },
         ],
      },
      {
         _id: '61534c68f49a34129c48c10e',
         comment: 'Ár érték arányban nem rossz ,de a világot nem fogja megváltani :)',
         commentAnswers: [],
         ratedAt: '2021-09-28T17:10:00.695Z',
         rating: 4.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'nagytommy76',
         responses: [
            { isLike: true, userId: '6134ac45824b6c129cd0859b', _id: '6153508d2ba2282324b2c824' },
            {
               isLike: true,
               userId: '614f39ce51587c3450377112',
               _id: '6159b51995d8e103842d132a',
            },
         ],
      },
   ],
}

export const mockWithNewComment = {
   status: 200,
   data: [
      {
         _id: '61534c48f49a34129c48c0fc',
         comment: 'Az árához képest so-so',
         commentAnswers: [],
         ratedAt: '2021-09-28T17:09:28.765Z',
         rating: 2.5,
         userId: '614f39ce51587c3450377112',
         userName: 'senki321',
         responses: [
            { isLike: false, userId: '6134ac45824b6c129cd0859b', _id: '61535adc634bea29b4542ab1' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb7d95d8e103842d13af',
            },
         ],
      },
      {
         _id: '61534c68f49a34129c48c10e',
         comment: 'Ár érték arányban nem rossz ,de a világot nem fogja megváltani :)',
         commentAnswers: [],
         ratedAt: '2021-09-28T17:10:00.695Z',
         rating: 4.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'nagytommy76',
         responses: [
            { isLike: true, userId: '6134ac45824b6c129cd0859b', _id: '6153508d2ba2282324b2c824' },
            {
               isLike: true,
               userId: '614f39ce51587c3450377112',
               _id: '6159b51995d8e103842d132a',
            },
         ],
      },
      {
         _id: '61534c93f49a34129c48c120',
         comment: 'Olcsó húsnak híg a leve',
         commentAnswers: [],
         ratedAt: '021-09-28T17:10:43.634Z',
         rating: 1.5,
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'senki123',
         responses: [
            { isLike: true, userId: '614f39ce51587c3450377112', _id: '6159b4cc95d8e103842d1321' },
            {
               isLike: true,
               userId: '60f3f0b9c7f8211424864a2c',
               _id: '6159bb8495d8e103842d13b3',
            },
         ],
      },
      {
         _id: '615hggfdrt546654fzdt645654',
         comment: 'Teszi a dolgát, nekem nagyon bejött',
         commentAnswers: [],
         ratedAt: '021-11-07T10:10:43.634Z',
         rating: 1.5,
         userId: '60f3f0brwerewrew2c',
         userName: 'nagytommy76',
         responses: [],
      },
   ],
}

export const mockNewCommentAnswer = {
   status: 201,
   data: [
      {
         answer: 'Teszt üzenetet küldök!!!',
         answeredAt: '2022-05-04T11:34:58.916Z',
         responses: [],
         userId: '60f3f0b9c7f8211424864a2c',
         userName: 'nagytommy76',
         _id: '627264e24f3313001e18ebaf',
      },
   ],
}
