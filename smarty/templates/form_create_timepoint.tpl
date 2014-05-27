{if $success}

<p>New time point successfully registered. <a href="main.php?test_name=timepoint_list&candID={$candID}">Click here to continue.</a></p>

{else}

<p>The suggested visit label appears in the field!</p>

<form method="post" name="create_timepoint" id="create_timepoint">

    <h3>Create Time Point</h3>
    <br>

    {foreach from=$form.errors item=error}
    <div class="col-sm-12">
        <label class="error col-sm-12">{$error}</label>
    </div>
    {/foreach}

	<div class="form-group col-sm-12">
		<label class="col-sm-2">DCCID</label>
		<div class="col-sm-10">{$candID}</div>
	</div>
	<div class="form-group col-sm-12">
		<label class="col-sm-2">Subproject</label>
		<div class="col-sm-10">{$form.subprojectID.html}</div>
	</div>
	<div class="form-group col-sm-12">
		<label class="col-sm-2">Visit label</label>
		<div class="col-sm-10">{$form.visitLabel.html}</div>
	</div>

	<div class="form-group col-sm-12">
		<div class="col-sm-12"><input class="btn btn-primary col-sm-offset-2 col-sm-2" name="fire_away" value="Create Time Point" type="submit" /></div>
	</div>
</table>
{$form.hidden}
</form>

{/if}
