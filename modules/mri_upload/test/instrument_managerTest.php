<?php
/**
 * Instrument_manager automated integration tests
 *
 * PHP Version 5
 *
 * @category Test
 * @package  Loris
 * @author   Ted Strauss <ted.strauss@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://github.com/aces/Loris
 */

require_once __DIR__ . "/../../../test/integrationtests/LorisIntegrationTest.class.inc";
class instrumentManagerTestIntegrationTest extends LorisIntegrationTest
{
    protected $url = 'http://localhost/main.php?test_name=instrument_manager';

    /**
     * Tests that, when loading the instrument_manager module, some
     * text appears in the body.
     *
     * @return void
     */
    function testInstrumentManagerDoespageLoad()
    {
        $this->webDriver->get($this->url);
        $bodyText = $this->webDriver->findElement(WebDriverBy::cssSelector("body"))->getText();
        $this->assertContains("instrument_manager", $bodyText);
    }
}
?>