/**
 * 1) Define a function named `yelling` that takes an array of
 * strings as an argument and returns a new array with all
 * the words forced to uppercase
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function yelling(words: string[]): string[] {
  return words.map(element => {
    return element.toUpperCase()
  })
}

/**
 *
 * 2) Define a function named `doubleTrouble` that takes an array of
 * numbers as an argument and returns a new array with all
 * the numbers multiplied by 2
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function doubleTrouble(numbers: number[]): number[] {
  return numbers.map(element => {
    return element * 2
  })
}

/*
 * 3) Define a function named `stringyIndexes` that takes an array of
 * strings as an argument and returns a new array with each string
 * suffixed with " is at index X" where X is the index of the element
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function stringyIndexes(strings: string[]): string[] {
  return strings.map((element, i) => {
    return element + ` is at index ` + i
  })
  /*
   * ^^^^^^^ Or, could have used interpolation for adding "i" within the string
   */

  /**
   * return strings.map(element => {
   *   return element + ` is at index ${strings.indexOf(element)}`
   * })
   */
  /** Lauren's solution:
   *    return strings.map((string,index) => `${string} is at index ${index}`)
   *
   * So... is "i" or "index" a built in argument / (predicate)? Whatever it's called...
   */
}

/*
 * 4) Define a function named onlyTheEvenSurvive that accepts an array of
 * numbers and returns only the elements that are even
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function onlyTheEvenSurvive(numbers: number[]): number[] {
  return numbers.filter(element => element % 2 == 0)
}

/*
 * 5) Define a function onlyTheEvenIndexedSurvive that accepts an array of
 * numbers and returns only the elements at indexes that are even
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function onlyTheEvenIndexedSurvive(numbers: number[]): number[] {
  return numbers.filter((number, i) => i % 2 === 0)
}

/*
 * 6)  Define a function bestMoviesOfTheYear that accepts an array of
 * movie objects AND a year and returns the names of movies that are
 * from that year AND have a score more than 90
 *
 * A movie object looks like this:
 *
 * {
 *   name: "Get Out",
 *   year: 2017,
 *   score: 99
 * }
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

type Movie = {
  name: string
  year: number
  score: number
}
function bestMoviesOfTheYear(
  movieObjectArray: Movie[],
  year: number
): string[] {
  // return movieObjectArray.map(movie => movie.name)
  const transformedMovieObjectArray = Object.entries(movieObjectArray)
  const selectedMovieTitles = transformedMovieObjectArray.filter(
    ([key, value]) => value.score > 90 && value.year === year
  )
  return selectedMovieTitles.map(([key, movie]) => movie.name)
}
/*
 * 7) Define a function everyoneIsOdd that accepts an array of
 * numbers and returns true if every element of the array is
 * odd.
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function everyoneIsOdd(numbers: number[]): boolean {
  return numbers.every(number => number % 2 !== 0)
}

/*
 * 8) Define a function findTheNeedle that accepts an array of
 * strings and returns the one string that contains the word
 * `needle` inside
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function findTheNeedle(strings: string[]): string {
  //return strings.filter(word => word.includes('needle')).toString()
  // or...
  return strings.find(string => string.match('needle')) || ' '
}

/*
 * 9) Define a function findTheNeedleIndex that accepts an array of
 * strings and returns the index of the string that contains
 *  the word `needle` inside
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function findTheNeedleIndex(strings: string[]): number {
  //return strings.indexOf(string => string.match('needle')) <---- doesn't work
  return strings.findIndex(string => string.match('needle'))
}

/*
 *` 10)  Define a function someoneToLove that accepts an array of
 * strings and returns true if at least one string is exactly
 * four characters long
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function someoneToLove(strings: string[]): boolean {
  // return strings.find(word => word.length === 4) <----- why not work?
  return strings.some(string => string.length === 4)
}

/*
 * 11)  Define a function objectKeys that accepts an object of
 *      the form below and returns an array of the object key followed
 *      by a dash and then the title
 *
 *      NOTE: You'll need to use either:
 *            Object.keys: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *        or  Object.entries: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *        along with `map` to solve this
 *
 *      NOTE: The keys will be different every time this code is tested. That is, it won't always be `pandas` and `miniatures`
 *
 *      Example object
 *
 *      {
 *        "pandas": {
 *          "title": "Panda Bears",
 *          "description": "Pandas are bears native to south-central China, and are objectively the cutest animals on earth.",
 *        },
 *        "miniatures": {
 *          "title": "Miniature Painting",
 *          "description": "I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work.",
 *        }
 *      }
 *
 *      Example expected return:
 *
 *      ['pandas - Panda Bears', 'miniatures - Miniature Painting']
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

type Hobbies = Record<string, { title: string; description: string }>
function objectKeys(objectOfHobbies: Hobbies): string[] {
  // Replace the code below with your own code
  return []
}

/**
 *
 *                            STOP
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *                           STOP
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * NOTE: Don't modify anything below this line...
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * NOTE: Don't modify anything below this line...
 */

const deepEqual = require('deep-equal')
const chalk = require('chalk')

function isDefined(method: string) {
  return eval(`typeof ${method}`) === 'function'
}

function compare(
  received: string | string[] | number[] | object[] | number | boolean,
  expected: string | string[] | number[] | object[] | number | boolean
) {
  if (deepEqual(received, expected)) {
    return ''
  } else {
    return `Received: ${JSON.stringify(received)} but expected ${JSON.stringify(
      expected
    )}`
  }
}

type TestCase = {
  methodName: string
  test: () => string
}

const tests: TestCase[] = [
  {
    methodName: 'yelling',
    test: () => {
      const received = yelling(['now', 'is', 'the', 'time'])
      const expected = ['NOW', 'IS', 'THE', 'TIME']

      return compare(received, expected)
    }
  },
  {
    methodName: 'doubleTrouble',
    test: () => {
      return compare(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
    }
  },
  {
    methodName: 'stringyIndexes',
    test: () => {
      return compare(stringyIndexes(['how', 'now', 'brown', 'cow']), [
        'how is at index 0',
        'now is at index 1',
        'brown is at index 2',
        'cow is at index 3'
      ])
    }
  },
  {
    methodName: 'onlyTheEvenSurvive',
    test: () => {
      return compare(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
        42,
        50,
        100,
        44
      ])
    }
  },
  {
    methodName: 'onlyTheEvenIndexedSurvive',
    test: () => {
      return compare(
        onlyTheEvenIndexedSurvive([
          31,
          67,
          64,
          96,
          14,
          24,
          43,
          51,
          48,
          80,
          58,
          43,
          64,
          84,
          98,
          99,
          69,
          93,
          5,
          32,
          29,
          4,
          28,
          18,
          86,
          22,
          20,
          74,
          35,
          27,
          85,
          79,
          65,
          32,
          56,
          94,
          93,
          20,
          29,
          22,
          72
        ]),
        [
          31,
          64,
          14,
          43,
          48,
          58,
          64,
          98,
          69,
          5,
          29,
          28,
          86,
          20,
          35,
          85,
          65,
          56,
          93,
          29,
          72
        ]
      )
    }
  },
  {
    methodName: 'bestMoviesOfTheYear',
    test: () => {
      const movies = [
        { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
        { name: 'Birdman', year: 2014, score: 91 },
        { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
        { name: 'Rage', year: 2014, score: 14 },
        { name: 'Get Out', year: 2017, score: 99 },
        { name: 'Justice League', year: 2017, score: 40 },
        { name: 'Ghost in the Shell', year: 2017, score: 46 },
        { name: 'The Big Sick', year: 2017, score: 98 }
      ]
      return (
        compare(bestMoviesOfTheYear(movies, 2014), [
          'The Grand Budapest Hotel',
          'Birdman'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2017), [
          'Get Out',
          'The Big Sick'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2001), [])
      )
    }
  },
  {
    methodName: 'everyoneIsOdd',
    test: () => {
      return (
        compare(everyoneIsOdd([9, 15, 27, 101, 33]), true) ||
        compare(everyoneIsOdd([9, 23, 3, 4, 77]), false)
      )
    }
  },
  {
    methodName: 'findTheNeedle',
    test: () => {
      return compare(
        findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
        'there was a needle at'
      )
    }
  },
  {
    methodName: 'findTheNeedleIndex',
    test: () => {
      return compare(
        findTheNeedleIndex([
          'one',
          'time',
          'there was a needle at',
          'the market'
        ]),
        2
      )
    }
  },
  {
    methodName: 'someoneToLove',
    test: () => {
      return (
        compare(someoneToLove(['how', 'now', 'brown', 'cow']), false) ||
        compare(someoneToLove(['how', 'now', 'blue', 'cow']), true)
      )
    }
  },
  {
    methodName: 'objectKeys',
    test: () => {
      function getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max))
      }

      const objectOfHobbies = {
        [`hobby-${getRandomInt(500)}`]: {
          title: `Panda ${getRandomInt(500)} Bears`,
          description: `Pandas are bears native to south-central China, and are objectively the cutest animals on earth. ${getRandomInt(
            500
          )}`
        },
        miniatures: {
          title: `Miniature ${getRandomInt(500)} Painting`,
          description: `I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work. ${getRandomInt(
            500
          )}`
        }
      }

      const answer = Object.keys(objectOfHobbies).map(
        key => `${key} - ${objectOfHobbies[key].title}`
      )
      return compare(objectKeys(objectOfHobbies), answer)
    }
  }
]

const longestTestName = Math.max(...tests.map(test => test.methodName.length))

function runOneTest(testCase: TestCase) {
  try {
    if (!isDefined(testCase.methodName)) {
      return 'undefined'
    }

    return testCase.test()
  } catch {
    return 'Some kind of syntax or other code error'
  }
}

let totalPassing = 0

console.clear()
tests.forEach(test => {
  const paddedTestName =
    test.methodName + ' '.repeat(longestTestName - test.methodName.length)

  const testResult = runOneTest(test)

  switch (testResult) {
    case 'undefined':
      console.log(chalk.yellow(`${paddedTestName} ⚡️⚡️ not defined️ ⚡️️⚡️`))
      break
    case '':
      totalPassing++
      console.log(chalk.green(`${paddedTestName} pass`))
      break
    default:
      console.log(chalk.red(`${paddedTestName} ${testResult}`))
      break
  }
  console.log()
})

console.log('\n\n')
if (totalPassing === tests.length) {
  console.log(chalk.green('CONGRATULATIONS! All methods work!'))
} else {
  console.log(
    chalk.yellow(
      'At least one method is not working ... keep going. You got this!'
    )
  )
}
