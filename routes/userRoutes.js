import {
    getAllGames,
    getGameDetails,
    getGameScreenshots,
    getGameAchievements,
    getGameTrailers
} from '../controllers/userControllers'

const routes = (app) => {
    app.route('/getAllGames')
        .get(getAllGames)

    app.route('/getDetails')
        .get(getGameDetails)

    app.route('/getGameScreenshots')
        .get(getGameScreenshots)

    app.route('/getGameAchievements')
        .get(getGameAchievements)

    app.route('/getGameTrailers')
        .get(getGameTrailers)
}

export default routes