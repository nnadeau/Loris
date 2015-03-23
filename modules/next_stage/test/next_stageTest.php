<?php
/**
 * Next_stage automated integration tests
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
class nextStageTestIntegrationTest extends LorisIntegrationTest
{
    protected $url = 'http://localhost/main.php?test_name=next_stage';

    /**
     * Tests that, when loading the Next_stage module, some
     * text appears in the body.
     *
     * @return void
     */
    function testNextStageDoespageLoad()
    {
        $this->webDriver->get($this->url);
        $bodyText = $this->webDriver->findElement(WebDriverBy::cssSelector("body"))->getText();
        $this->assertContains("next_stage", $bodyText);
    }
}
?>