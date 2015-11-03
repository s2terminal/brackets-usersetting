//Read http://lodash.com/docs#template to understand what is "${whatever}" is.
//TLDR: do not change ids inside of ${...}

//Value can be a string or function that will return a string

define(function (require, exports, module){
    module.exports = {
        downloads: 'Downloads',
        hide: 'Hide',
        more: 'more',
        oneMoreVersion: '<div>... and one more version.</div>',
        sortby: 'Sort by ...',
        author: 'Author',
        update: 'Last Update',
        trending: 'Trending', //0.3.0
        name: 'Name',
        daily: 'downloads yesterday', //0.3.0
        stars: 'Stars', //0.4.0
        forks: 'Forks', //0.4.0
        themes: 'Themes', //0.5.0

        /*BADGES - 0.3.2*/
        badgeAdobe: 'Adobe',
        badgeAdobeTitle: 'Extension from Adobe',

        badge100k: '100k Downloads',
        badge100kTitle: 'First extension that had 100k downloads',

        badge200kTitle: 'First extension that had 200k downloads', // 0.6.1

        badgeTop: 'Top',
        badgeTopTitle: 'Most popular extension',

        badgeTrend: 'Trending',
        badgeTrendTitle: 'Most trending extension',

        badgeNew: 'New',
        badgeNewTitle: 'New extension',

        badgeStarsTitle: 'Most popular extension on GitHub', //0.4.0
        badgeForksTitle: 'Most forked extension on GitHub', //0.4.0

        badgeJS: 'JS', //0.7.0
        badgeJSTitle: 'JavaScript Extension', //0.7.0

        badgeCSS: 'CSS', //0.7.0
        badgeCSSTitle: 'CSS/LESS/SASS Extension', //0.7.0

        badgeHTML: 'HTML', //0.7.0
        badgeHTMLTitle: 'HTML Extension', //0.7.0

        badgeLint: 'Linter', //0.7.0
        badgeLintTitle: 'Linter Extension', //0.7.0

        badgeGit: 'Git', //0.7.0
        badgeGitTitle: 'Extension for Git repositories', //0.7.0

        themeTitle: 'Brackets Theme',
        /*END of BADGES*/

        onlineTitle: 'Number of users that is using this extension right now. Click to find out how this number was calculated.', //0.5.0
        maxUsersTitle: 'Overall count of extension\'s users', //0.5.0

        //Detailed info about ##
        'click-more': 'Detailed info about', //0.3.0

        //Online for ## days, ## downloads per day
        statusTemplate: '<div>Online for <b>${days} days</b>, <b>${daily} ${str_daily}</b>, <b>${dpd} downloads per day</b></div>',

        //v ## from ## - ## downloads</div>
        versionTemplate: '<div>v ${version} from ${date} - ${downloads} downloads</div>',

        //... and ## more versions
        moreVersionsTemplate: '<div>... and ${count} more versions</div>',

        //0.5.4
        colorDark: 'dark',
        colorLight: 'light',

        //0.6.0
        click_for_more: 'Click to learn more.'
    }
});
