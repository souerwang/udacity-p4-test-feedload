/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* to make sure that the
         * allFeeds variable has been defined and that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* to test each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */ 
        it('URLs of the allFeeds are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* to test each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names of the allFeeds are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* Test suite of "The menu" */
    describe('The menu', function() {
        // Add a menu val
        let menu;

        /* to test the menu element is hidden by default.
         * as mentor's guid, here shouuld use 'hasClass'  method rather than
         * judge the result directly 
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* to test the menu changes
          * visibility when the menu icon is clicked. 
          */
        it('change visibility while the menu icon is clicked', function() {
            // Click once
            $(".menu-icon-link").trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // Click again
            $(".menu-icon-link").trigger("click");
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });        
    });


    /* Test suite of "Initial Entries" */
    describe('Initial Entries', function(){
        /* to test the loadFeed completes its work when the loadFeed
         * function is called, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0,done);
        })

        it('should initial load feed correctly', function(done) {
            /**
             * incorrectly use 'expect($('.entry .feed')).toBeDefined()' for 
             * ensure there is at least a single .entry element within .feed container, 
             * b/s inside .entry , .feed is not present. that means .entry parent class 
             * doesn't has a .feed child
             */
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    /* Test suite of "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* to test the content actually changes when a new feed is loaded.
         */
        let previousEntries,
            currentEntries;
        beforeEach(function (done) {
            $('.feed').empty();
            loadFeed(1, function() {
                previousEntries = $('.feed').find(allFeeds.url);
                loadFeed(2, function() {
                    currentEntries = $('.feed').find(allFeeds.url);
                    done();
                });
            });
        });

        it('the content actually changes while a new feed is loaded', function(done) {
            expect(previousEntries).not.toBe(currentEntries);
            done();
        });
    });

}());
